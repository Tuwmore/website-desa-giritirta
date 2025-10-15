import {Card, Button} from 'react-bootstrap';

const smallDisplay = ({ title, description, imageUrl }) => {  // variable untuk data dinamis
  return (
    <Card style={containerStyle}>
      <Card.Img variant="top" src={imageUrl} style={{borderRadius: "0px"}}/>
      <Card.Body>
        <Card.Title style={JudulStyle}>{title}</Card.Title>
        <Card.Text className="font-deskripsi">
          {description}
        </Card.Text>
        <Button style={buttonStyle}>Lebih lanjut</Button>
      </Card.Body>
    </Card>
  );
}

const containerStyle = {
  backgroundColor: "rgba(217, 217, 217, 0.7)",
  width: "28rem",
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

export default smallDisplay;