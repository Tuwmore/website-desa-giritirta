import { Col, Row, Stack, Button, Container } from 'react-bootstrap';
import BigDisplay from '../Reuseable/bigDisplay';
import SmallDisplay from "../Reuseable/smallDisplay";
import GifDisplay from '../Reuseable/GifDisplay';
import Judul from '../Reuseable/Judul';
import Carousels from '../Reuseable/carousels';
import Holder from "../../Assets/DSCF9005.JPG"; // foto sementara untuk contoh
import GIF from "../../Assets/DSCF1286 (1).gif"
import Header from "../Reuseable/Header";
import Footer from "../Reuseable/Footer";
import "../WebPage/webPageStyle.css";

function Beranda () {
    const cardData = [
        {
            imageUrl: Holder,
            title: 'Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya',
        },
    
        {
            imageUrl: Holder,
            title: 'Edukasi Lingkungan Hidup Bonus Sehat di Misi Lestari 2023: See Nature',
        },
    
        {
            imageUrl: Holder,
            title: 'Gokil! Puluhan Ribu Orang Ramaikan Pertamina Eco RunFest 2023',
        },
    
        {
            imageUrl: Holder,
            title: 'Kelar Lari di CT Arsa Charity Fun Run, Recharge Energi Nonton Maliq & D essentials',
        },
    
        {
            imageUrl: Holder,
            title: 'CT Arsa Charity Fun Run 2023 Bertabur Emas',
        },
    
        {
            imageUrl: Holder,
            title: 'BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta',
        },
        {
            imageUrl: Holder,
            title: 'CT Arsa Charity Fun Run 2023 Bertabur Emas',
        },
    
        {
            imageUrl: Holder,
            title: 'BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta',
        },
      ];
      
    return(
        <Container fluid style={{padding: "0px", overflow:"hidden"}}>
            <Stack gap={5}>
                <Header/>
                <div>
                    <GifDisplay 
                        imageText="Selamat Datang di Desa Giritirta"
                        image={GIF}
                    />
                </div>


                <div >
                    <Judul
                        title = "1200M diatas permukaan laut" // bagian dari ketahui lebih banyak
                    />
                </div>
                <div className='half-background'>
                    <BigDisplay/>
                </div>


                <Judul
                    title = "Wisata desa Giritirta" //bagian wisata desa
                />
                <div className='background'>
                    <Stack gap={4}>
                        <Row className="justify-content-md-center" md={1} xl={2} gap={4}>
                            <Col>
                                <SmallDisplay></SmallDisplay>
                            </Col>
                            <Col>
                                <SmallDisplay></SmallDisplay>
                            </Col>
                        </Row>
                        <Container>
                            <Row sm={1} md={2} xl={4} >
                                {cardData.map((card, index) => (
                                <Col key={index} style={{marginBottom:20}}>
                                    <Carousels {...card} />
                                </Col>
                                ))}
                            </Row>
                        </Container>
                    </Stack>
                </div>


                <Judul
                    title = 'UMKM dan Hasil Bumi' //bagian UMKM dam Hasil Bumi
                />
                <div>
                    <Stack gap={5}>
                        <Row className="justify-content-md-center" md={1} xl={2} gap={4}>
                            <Col>
                                <SmallDisplay/>
                            </Col>
                            <Col>
                                <SmallDisplay/>
                            </Col>
                        </Row>


                        <Judul
                            title="Berita Terkini" // Bagian dari artikel terkini
                        />
                        <Container>
                            <Row sm={1} md={2} xl={4} >
                                {cardData.map((card, index) => (
                                <Col key={index} style={{marginBottom:20}}>
                                    <Carousels {...card} />
                                </Col>
                                ))}
                            </Row>
                        </Container>
                        <div style={{alignSelf: "center"}}>
                            <Button size="lg" style={buttonStyle}> Lebih banyak </Button>
                        </div>
                    </Stack>
                </div>
                <Footer/>
            </Stack>
        </Container>
    );
};

export default Beranda;

const buttonStyle = {
    backgroundColor: "rgba(0, 189, 157, 0.6)",
    fontFamily: "Montserrat",
    fontWeight: "500",
    border: 'none', // Remove borders
    color: 'black', 
    textAlign: 'center', 
    fontSize: '16px', 
    cursor: 'pointer', 
    borderRadius: '0px',
}