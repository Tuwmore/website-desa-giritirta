//Done for now
import Card from 'react-bootstrap/Card';
import Holder from "../../Assets/DSCF9005.JPG"; // foto sementara untuk contoh

const smallDisplay = ({ title, description, imageUrl }) => {  // variable untuk data dinamis
  return (
    <Card style={containerStyle}>
      <Card.Img variant="top" src={Holder} style={{borderRadius: "0px"}}/>
      <Card.Body>
        <Card.Title style={JudulStyle}>Judul</Card.Title>
        <Card.Text className="font-deskripsi">
          deskripsi
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const containerStyle = {
  backgroundColor: "rgba(217, 217, 217, 0.7)",
  width: "25rem",
  margin: "0 auto",
  borderRadius: "0",
  border: "none",
}

const JudulStyle = {
  fontFamily: "Montserrat",
  fontWeight: "bolder",
  fontSize: "larger",
  color: "black",
}

export default smallDisplay;