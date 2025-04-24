import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Login = ()=>  {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("sending data to server");

      const response = await fetch('https://studentapp-pwpi.onrender.com/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email,
              password,
          }),
      })

      const result = await response.json();
      console.log(result);
      if(result.status === 200){
          alert('User logged in successfully')
          navigate('/dashboard')


    }
    else
    {
        alert('Invalid credentials')
    }
  }

  
  return (

    <div style={{width: "100%", margin: "auto", paddingTop: "100px", backgroundColor: "",padding: "20px", borderRadius: "10px", boxShadow:" 2px 2px 10px black"}}>
      <h1>Login</h1>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    </div>

  )
}

export default Login