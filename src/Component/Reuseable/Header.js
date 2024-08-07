import {Image, Container, Row, Stack} from 'react-bootstrap';
import Logo from "../../Assets/logo-KKN.png";
import "./reusableStyle.css";

function Header() {
  return (
    <Container fluid
    >
      <Row>
        <Stack direction="horizontal" gap={3}>
            <button className="font-header" style={buttonStyle}><Image src={Logo} fluid /></button>
            <button className="font-header" style={buttonStyle}>Desa Giritirta</button>
            <button className="font-header ms-auto" style={buttonStyle}>Profil Desa</button>
            <button className="font-header" style={buttonStyle}>Wisata</button>
            <button className="font-header" style={buttonStyle}>Potensial Desa</button>
        </Stack>
      </Row>
    </Container>
  );
};

const buttonStyle = {
  backgroundColor: 'transparent', 
  border: 'transparent', 
  // color: '#000', 
  // padding: '10px 20px'
};

export default Header;