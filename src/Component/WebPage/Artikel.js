import { Container, Stack } from "react-bootstrap";
import GifDisplay from "../Reuseable/GifDisplay";
import Judul from "../Reuseable/Judul";
import Header from "../Reuseable/Header";
import Footer from "../Reuseable/Footer";
import PetaKemiringan from "../../Assets/Peta Kemiringan.jpg"
import PetaStunting from "../../Assets/peta resiko stunting.jpg"
import PetaGizi from "../../Assets/peta sebaran anak kurang gizi.jpg"
import PetaPertanian from "../../Assets/peta sebaran pertanian.jpg"
import PetaJalan from "../../Assets/Peta Sebaran Titik Kerusakan Jalan dan Tingkat PCI.jpg"
import PetaWisata from "../../Assets/Peta Tracking WIsata.jpg"
import "./webPageStyle.css";

const Artikel = ({ title, description, artikel, imageUrl, imageCategory }) => {
    return(
        <Container fluid style={{padding: "0px", overflow:"hidden"}}>
            <Stack gap={5}>
                <Header/>
                <GifDisplay
                    //image={imageCategory}
                />
                <Judul
                    title={"Peta Kemiringan"}
                />
                <div style={artikelContainerStyle}>
                    <p style={textStyle}>                        
                        {description}
                    </p>
                </div>
                <GifDisplay
                    image={PetaWisata}
                />
                <div style={artikelContainerStyle}>
                    <p style={textStyle}>
                        {artikel}
                    </p>
                </div>
                <Footer/>
            </Stack>
        </Container>
    );
};

const artikelContainerStyle = {
    width: '85vw',
    //overflow: 'hidden' Ensure no scrollbars appear
    display: 'flex',
    //justifyContent: 'center',
    alignItems: "center",
    alignSelf: "center", //untuk mendahin kontainer ke tengah
    //backgroundColor: "blue",
    wordWrap: 'break-word', // Ensures long words break and wrap to the next line
    overflowWrap: 'break-word' // Another property that ensures words break and wrap

}

const textStyle = {
    textIndent: '2em',
    fontSize: "large",
    wordWrap: 'break-word', // Ensures long words break and wrap to the next line
    overflowWrap: 'break-word', // Another property that ensures words break and wrap
    alignText: "justify",
}
export default Artikel;
