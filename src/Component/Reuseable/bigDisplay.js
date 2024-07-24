//Done for now

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Holder from "../../Assets/DSCF9005.JPG"; // foto sementara untuk contoh
import "./reusableStyle.css";

const BigDisplay = ({ title, description, imageUrl }) => {  // variable untuk data dinamis
  return (
    <Card style={containerStyle}>
      <Card.Img variant="top" style={{borderRadius: "0px"}} src={Holder} />
      <Card.Body>
        <Card.Title style={JudulStyle}>Kenali Lebih Jauh Desa Giritirta</Card.Title>
        <Card.Text className="font-deskripsi">
          Tambahkan deskripsi disini
        </Card.Text>
        <Button style={buttonStyle}>Lebih lanjut</Button>
      </Card.Body>
    </Card>
  );
}

const containerStyle = {
  backgroundColor: "rgba(217, 217, 217, 0.7)",
  width: "85%",
  margin: "0 auto",
  borderRadius: "0",
  border: "none",
}

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

const JudulStyle = {
  fontFamily: "Montserrat",
  fontWeight: "bolder",
  fontSize: "larger",
  color: "black",
}

export default BigDisplay;