import { Image } from "react-bootstrap";
import GIF from "../../Assets/DSCF1286 (1).gif"; // contoh
import "./reusableStyle.css";

const GifDisplay = ({ imageText, image }) => {
    return(
        <div style={GIFContainer}>
                <Image src={image} fluid style={GIFStyle}/>
                <div style={overlayStyle}>
                    <div style={textStyle}>
                        <h1>{imageText}</h1>
                    </div>
                </div>
        </div>
    );
}

const GIFStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover'
}

const GIFContainer = {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden', // Ensure no scrollbars appear
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: "black"
}

const overlayStyle = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)' // Optional: Adds a semi-transparent overlay
  };

  const textStyle = {
    color: 'white',
    textAlign: 'center',
    fontFamily: "Montserrat",
    fontWeight: "bolder",
    fontSize: "larger",
  };

export default GifDisplay;