import { Col, Row, Container, Pagination } from "react-bootstrap";
import Holder from "../../Assets/DSCF9005.JPG";
import ThumbnailAdmin from "../Reuseable/thumbnailAdmin";
import "./webPageStyle.css"

function BerandaAdmin (){
    const cardData = [
        {
            imageUrl: Holder,
            title: 'Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya',
            description: "oihwuiiufiqwfiqwhgfiq",

        },
    
        {
            imageUrl: Holder,
            title: 'Edukasi Lingkungan Hidup Bonus Sehat di Misi Lestari 2023: See Nature',
            description: "oihwuiiufiqwfiqwhgfiq",
        },
    
        {
            imageUrl: Holder,
            title: 'Gokil! Puluhan Ribu Orang Ramaikan Pertamina Eco RunFest 2023',
            description: "oihwuiiufiqwfiqwhgfiq",
        },
    
        {
            imageUrl: Holder,
            title: 'Kelar Lari di CT Arsa Charity Fun Run, Recharge Energi Nonton Maliq & D essentials',
            description: "oihwuiiufiqwfiqwhgfiq",
        },
    
        {
            imageUrl: Holder,
            title: 'CT Arsa Charity Fun Run 2023 Bertabur Emas',
            description: "oihwuiiufiqwfiqwhgfiq",
        },
    
        {
            imageUrl: Holder,
            title: 'BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta',
            description: "oihwuiiufiqwfiqwhgfiq",
        },
        {
            imageUrl: Holder,
            title: 'CT Arsa Charity Fun Run 2023 Bertabur Emas',
            description: "oihwuiiufiqwfiqwhgfiq",
        },
    
        {
            imageUrl: Holder,
            title: 'BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta',
            description: "oihwuiiufiqwfiqwhgfiq",
        },
      ];

        let active = 2;
        let items = [];
        for (let number = 1; number <= 5; number++) {
            items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
            );
        }

    return (
        <Container>
            <Row xs={1} >
                {cardData.map((card, index) => (
                <Col key={index} style={{marginBottom:20}}>
                <ThumbnailAdmin {...card} />
                </Col>
                ))}
            </Row>
            <Pagination size="md">{items}</Pagination>
        </Container>
    )
}

export default BerandaAdmin;

const buttonStyle = {
    backgroundColor: "rgba(0, 189, 157, 0.6)",
    fontFamily: "Montserrat",
    fontWeight: "500",
    border: 'none', // Remove borders
    color: 'White', 
    textAlign: 'center', 
    fontSize: '24px', 
    cursor: 'pointer', 
    borderRadius: '7px',
}