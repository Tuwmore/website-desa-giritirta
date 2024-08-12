import { Container, Stack } from "react-bootstrap";
import GifDisplay from "../Reuseable/GifDisplay";
import Judul from "../Reuseable/Judul";
import GIF from "../../Assets/DSCF1286 (1).gif";
import Header from "../Reuseable/Header";
import Footer from "../Reuseable/Footer";
import "./webPageStyle.css";

const Artikel = ({ title, description, artikel, imageUrl, imageCategory }) => {
    return(
        <Container fluid style={{padding: "0px", overflow:"hidden"}}>
            <Stack gap={5}>
                <Header/>
                <GifDisplay
                    image={imageCategory}
                />
                <Judul
                    title={title}
                />
                <div style={artikelContainerStyle}>
                    <p style={textStyle}>
                        {description}
                    </p>
                </div>
                <GifDisplay
                    image={imageUrl}
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
