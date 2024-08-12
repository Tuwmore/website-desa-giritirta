import './App.css';
import Beranda from './Component/WebPage/beranda';
import BerandaAdmin from './Component/WebPage/BerandaAdmin';
import BerandaArtikel from "./Component/WebPage/BerandaArtikel"
import Artikel from './Component/WebPage/Artikel';
import FormPage from './Component/WebPage/FormPage';
import LogInPage from "./Component/WebPage/LogInPage";
import ProtectedRoute from './Component/WebPage/ProtectectRoute';
import { BrowserRouter as Router, Route, Link, Routes, Outlet,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/beranda-artikel" element={<BerandaArtikel />} />
        <Route path="/about" element={<Artikel />} />
        <Route path='/admin' element={<LogInPage/>}/>
        <Route
          path="/beranda-admin"
          element={
            <ProtectedRoute>
              <BerandaAdmin />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/form-admin' 
          element={
            <ProtectedRoute>
              <FormPage/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>

  );
}

export default App;
