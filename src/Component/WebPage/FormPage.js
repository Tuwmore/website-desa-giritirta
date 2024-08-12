import { Stack, Button, Form, Container } from "react-bootstrap";
import Judul from "../Reuseable/Judul";
import "./webPageStyle.css";

function FormPage (){
    return(
        <Stack>
            <Judul/>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Judul</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Artikel</Form.Label>
                        <Form.Control as="textarea" rows={3}/>
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Masukan Gambar</Form.Label>
                        <Form.Control type="file" multiple />
                        </Form.Group>
                </Form>
                <Button style={buttonStyle}>Simpan</Button>
            </Container>
        </Stack>
    )
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

export default FormPage;