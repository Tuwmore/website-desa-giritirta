import './App.css';
import Header from './Component/Reuseable/Header';
import BigDisplay from "./Component/Reuseable/bigDisplay";
import ThumbnailAdmin from './Component/Reuseable/thumbnailAdmin';
import Thumbnail from "./Component/Reuseable/thumbnail"
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousels from './Component/Reuseable/carousels';

function App() {
  return ( 
    <Container fluid className="w-100 h-100 d-flex flex-column">
      <Header>
      </Header>
      
      <Carousels></Carousels>

    </Container>

  );
}

export default App;
