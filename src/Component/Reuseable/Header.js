import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Image} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import Logo from "../../Assets/logo-KKN.png";

function Header() {
  return (
    <Container>
      <Row>
        <Stack direction="horizontal" gap={2}>
            <div className="p-2"><Image src={Logo} fluid /></div>
            <div className="p-2">Desa Giritirta</div>
            <div className="p-2 ms-auto">Profil Desa</div>
            <div className="p-2">Wisata</div>
            <div className="p-2">Potensial Desa</div>
        </Stack>
      </Row>
    </Container>
  );
}

export default Header;