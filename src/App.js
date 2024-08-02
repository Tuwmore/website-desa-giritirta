import './App.css';
import Header from './Component/Reuseable/Header';
import Footer from './Component/Reuseable/Footer';
import Beranda from './Component/WebPage/beranda';
import BerandaAdmin from './Component/WebPage/BerandaAdmin';
import Artikel from './Component/WebPage/Artikel';
import FormPage from './Component/WebPage/FormPage';
import { Container, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <Container fluid style={{padding: "0px", overflow:"hidden"}}>
      <Stack gap={5}>
        <Header>
        </Header>

        <FormPage/>

        <Footer></Footer>
      </Stack>  
    </Container>

  );
}

export default App;
