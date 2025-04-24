
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from 'react-bootstrap';
const Registeration = ()=>  {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("sending data to server");
        console.log(email, password);
        const response = await fetch('https://studentapp-pwpi.onrender.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await response.json();
        console.log(data);

        if(data.status === 200){
            alert('User registered successfully')
        }
        else{
            alert('User already exists')
        }
    }
  
  return (
    <div style={{width: "100%", margin: "auto", paddingTop: "100px", backgroundColor: "beige",padding: "20px", borderRadius: "10px", boxShadow:" 2px 2px 10px black"}}>
      <h1>Registeration</h1>
    <Form onSubmit={handleSubmit}> 
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>
    

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>


  )
}

export default Registeration;