
import {Card, Button} from 'react-bootstrap';
import Holder from "../../Assets/DSCF9005.JPG"; // foto sementara untuk contoh

const carousels = ({ title, imageUrl }) => {  // variable untuk data dinamis
  return (
    <Card style={containerStyle}>
      <Card.Img variant="top" src={imageUrl} style={{borderRadius:"1rem"}}/>
      <Card.Body>
        <Card.Title style={JudulStyle}>
          <Card.Link as={Button} variant= "JudulStyle" href="#" className='text-left font-cardBerita' style={JudulStyle}>
          {title}
          </Card.Link>
          </Card.Title>
      </Card.Body>
    </Card>
  );
}

const containerStyle = {
  //backgroundColor: "rgba(217, 217, 217, 0.7)",
  width: "14rem",
  margin: "0 auto",
  //borderRadius: "0",
  border: "none",
}

const JudulStyle = {
  fontFamily: "Montserrat",
  fontWeight: "bold",
  fontSize: "small",
  color: "black",
}

export default carousels;