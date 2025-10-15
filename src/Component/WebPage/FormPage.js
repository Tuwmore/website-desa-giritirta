import { Stack, Button, Form, Container } from "react-bootstrap";
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Judul from "../Reuseable/Judul";
import Footer from "../Reuseable/Footer";
import "./webPageStyle.css";

function FormPage (){
    // digunakan untuk menangani upload data ke website
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [content, setContent] = useState('');
        const [category, setCategory] = useState('');
        const [image, setImage] = useState(null);
        const [imageUrl, setImageUrl] = useState('');
        const navigate = useNavigate();
        const maxFileSize = 2 * 1024 * 1024;
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          console.log('Form Submitted');
      
          try {
            let imageDownloadUrl = '';
      
            if (image) {
                console.log('Uploading Image...');
                const imageRef = ref(storage, `images/${image.name}`);
                await uploadBytes(imageRef, image);
                imageDownloadUrl = await getDownloadURL(imageRef);
                console.log('Image Uploaded:', imageDownloadUrl);
            }
      
            await addDoc(collection(db, 'Artikel'), {
              title,
              description,
              content,
              category,
              imageUrl: imageDownloadUrl,
            });
      
            alert('Article saved successfully!');
            // Reset form fields
            setTitle('');
            setDescription('');
            setContent('');
            setCategory('');
            setImage(null);
            setImageUrl('');
            navigate('/beranda-admin');
      
          } catch (error) {
            console.error('Error saving article: ', error);
          }

        };
    
    // digunakan untuk mendisplay data
    return(
        <Container fluid style={{padding: "0px", overflow:"hidden"}}>
            <Stack gap={5}>
                <Judul/>
                <Container >
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="adminInputJudul">
                            <Form.Label>Judul</Form.Label>
                            <Form.Control 
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                //required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="adminInputDeskripsi">
                            <Form.Label>Deskripsi singkat</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                //required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="adminInputArtikel">
                            <Form.Label>Artikel</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                //required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="adminInputKategori">
                            <Form.Label>Kategori</Form.Label>
                            <Form.Control
                                as="select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                //required
                            >
                                    <option>Pilih...</option>
                                    <option>Berita</option>
                                    <option>UMKM</option>
                                    <option>Hasil Bumi</option>
                                    <option>Wisata</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="adminInputFoto" className="mb-3">
                            <Form.Label>Masukan Gambar</Form.Label>
                            <Form.Control 
                                type="file" 
                                accept="image/*"
                                required
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                            </Form.Group>
                        <Button style={buttonStyle} type="submit">Simpan</Button>
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