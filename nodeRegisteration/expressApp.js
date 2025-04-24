const express = require('express');
const fs = require('fs').promises;
const cors = require('cors');





const app=express();
const PORT=3065;
app.use(cors({
    origin:'*',
    methods:'GET,POST,DELETE,PUT,OPTIONS',
    allowedHeaders:'Content-Type'
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    try{
        res.send("Hello world from express server")
    }
    catch(err){ 
        console.log(err);
        res.status(500).send("Internal server error")
    }


})
app.post('/register',async(req,res)=>{

    const {email,password}=req.body;

    console.log(req.body);
    if(!email || !password)
    {
        res.setHeader('Content-Type','application/json');
        return res.status(400).send(JSON.stringify({"message":"Please provide email and password"}));
    }
    let arr=[];
    try{
        const fdata=await fs.readFile('student.json',{encoding:'utf-8'});
        arr=JSON.parse(fdata);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal server error -- cant read file")
    }
    const result =arr.find((ele)=>ele.email==email);
    if(result)
    {
        res.setHeader('Content-Type','application/json');
        return res.status(409).send(JSON.stringify({"message":"Email already exist"}));
    }
    else{
        arr.push({email,password});
        await fs.writeFile('student.json',JSON.stringify(arr,null,2));
        res.status(200).send(JSON.stringify({"message":"/Request api hit successfully!!","status":200}));
    }
})

app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    let arr=[];
    try{
        const fdata=await fs.readFile('student.json',{encoding:'utf-8'});
        arr=JSON.parse(fdata);
  
    const result = arr.find((ele)=>ele.email==email);
    if(result)
    {
        res.setHeader('Content-Type','application/json');
        const check=arr.find((ele)=>ele.email==email && ele.password==password);
        if(check)
        {
            return res.status(200).send(JSON.stringify({"message":"Login successfully","status":200}));
        }
        else{
            return res.status(401).send(JSON.stringify({"message":"Inalid password"}));
        }
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(401).send(JSON.stringify({"message":"Email not found"}));
    }
}
catch(err){
    console.log(err);
    res.status(500).send("Internal server error")
}



})











app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})