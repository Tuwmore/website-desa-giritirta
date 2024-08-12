import { Stack, Button, Form, Container } from "react-bootstrap";
import Judul from "../Reuseable/Judul";
import Footer from "../Reuseable/Footer";
import "./webPageStyle.css";

function FormPage (){
    return(
        <Container fluid style={{padding: "0px", overflow:"hidden"}}>
            <Stack gap={5}>
                <Judul/>
                <Container >
                    <Form>
                        <Form.Group className="mb-3" controlId="adminInputJudul">
                            <Form.Label>Judul</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="adminInputDeskripsi">
                            <Form.Label>Deskripsi singkat</Form.Label>
                            <Form.Control as="textarea" rows={3}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="adminInputArtikel">
                            <Form.Label>Artikel</Form.Label>
                            <Form.Control as="textarea" rows={3}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="adminInputKategori">
                            <Form.Label>Kategori</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Pilih...</option>
                                <option>Berita</option>
                                <option>UMKM</option>
                                <option>Hasil Bumi</option>
                                <option>Wisata</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="adminInputFoto" className="mb-3">
                            <Form.Label>Masukan Gambar</Form.Label>
                            <Form.Control type="file" accept="image/*" />
                            </Form.Group>
                            <Button style={buttonStyle}>Simpan</Button>
                    </Form>
                </Container>
                <Footer/>
            </Stack>
        </Container>
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