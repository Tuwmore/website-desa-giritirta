import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Holder from "../../Assets/DSCF9005.JPG"; // foto sementara untuk contoh

const thumbnailAdmin = ({ title, description, imageUrl }) => {  // variable untuk data dinamis
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="" src={Holder} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Lebih lanjut</Button>
      </Card.Body>
    </Card>
  );
}

export default thumbnailAdmin;