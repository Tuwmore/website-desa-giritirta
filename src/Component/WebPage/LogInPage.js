import { Container, Form, Stack, Button } from "react-bootstrap";
import Footer from "../Reuseable/Footer";
import "./webPageStyle.css";

const LogInPage = () => {
    return(
        <Stack gap={20}>
            <Container style={{marginTop: 120, marginBottom:120, alignContent:"center", width:"50vw"}} fluid>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"placeholder="Password"/>
                    </Form.Group>
                </Form>
                <Button style={buttonStyle}>Log In</Button>
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