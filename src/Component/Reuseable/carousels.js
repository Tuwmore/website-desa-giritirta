//Done for now
import Card from 'react-bootstrap/Card';
import Holder from "../../Assets/DSCF9005.JPG"; // foto sementara untuk contoh

const carousels = ({ title, imageUrl }) => {  // variable untuk data dinamis
  return (
    <Card style={containerStyle}>
      <Card.Img variant="top" src={Holder} style={{borderRadius:"0px"}}/>
      <Card.Body>
        <Card.Title style={JudulStyle}>judul</Card.Title>
      </Card.Body>
    </Card>
  );
}

const containerStyle = {
  backgroundColor: "rgba(217, 217, 217, 0.7)",
  width: "12rem",
  margin: "0 auto",
  borderRadius: "0",
  border: "none",
}

const JudulStyle = {
  fontFamily: "Montserrat",
  fontWeight: "bold",
  fontSize: "medium",
  color: "black",
}

export default carousels;