import './App.css';
import Header from './Component/Reuseable/Header';
import BigDisplay from "./Component/Reuseable/bigDisplay"
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
    <Header></Header>
    <BigDisplay>
    </BigDisplay>
    </Container>

  );
}

export default App;
