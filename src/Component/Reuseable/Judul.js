import Background from "../../Assets/Title Background.png";
import { Image } from "react-bootstrap";

function Judul () {
    return (
        <div style={containerStyle}>
            <Image src={Background} fluid style={imageStyle} />
            <div style={overlayStyle}>
                <div style={textStyle}>
                    <h1>Judul</h1>
                </div>
            </div>
        </div>
    );
}

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover'
}

const containerStyle = {
    width: '100vw',
    height: '50vh',
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
    fontWeight: "bolder",
    fontFamily: "Montserrat, extra bold",
    fontSize: "large",
    color: 'black',
    textAlign: 'center'
};

export default Judul;