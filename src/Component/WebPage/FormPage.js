import { Stack, Button, Form } from "react-bootstrap";
import Judul from "../Reuseable/Judul";
import "./webPageStyle.css";

function FormPage (){
    return(
        <Stack>
            <Judul/>
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
                    <Form.Label>Multiple files input example</Form.Label>
                    <Form.Control type="file" multiple />
                    </Form.Group>
            </Form>
            <Button>Simpan</Button>
        </Stack>
    )
}

export default FormPage;