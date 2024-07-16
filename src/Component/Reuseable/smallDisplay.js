import Card from 'react-bootstrap/Card';
import Holder from "../../Assets/DSCF9005.JPG"; // foto sementara untuk contoh

const smallDisplay = ({ title, description, imageUrl }) => {  // variable untuk data dinamis
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Holder} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default smallDisplay;