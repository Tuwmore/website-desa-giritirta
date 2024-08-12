import { Container, Form, Stack, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import Footer from "../Reuseable/Footer";
import {auth} from "../../Firebase"
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./webPageStyle.css";



const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully logged in, redirect to admin page
        navigate('/beranda-admin');
      })
      .catch((error) => {
        // Handle errors here
        setError(error.message);
      });
    };

    return(
        <Stack gap={20}>
            <Container style={{marginTop: 120, marginBottom:120, alignContent:"center", width:"50vw"}} fluid>
            {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="name@example.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button style={buttonStyle} type="submit">Log In</Button>
                </Form>
            </Container>
            <Footer/>
        </Stack>
    );
}

const buttonStyle = {
    backgroundColor: "rgba(0, 189, 157, 0.6)",
    fontFamily: "Montserrat",
    fontWeight: "500",
    border: 'none',
    color: 'black', 
    textAlign: 'center', 
    fontSize: '16px', 
    cursor: 'pointer', 
    // borderRadius: '0px',
}

export default LogInPage;