//kurang font size engga dinamis

import Background from "../../Assets/Title Background.png";
import { Image } from "react-bootstrap";

const Judul = ({ title }) => {
    return (
        <div style={containerStyle}>
            <Image src={Background} fluid style={imageStyle} />
            <div style={overlayStyle}>
                <div>
                    <h1 style={textStyle}>{title}</h1>
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
    display: "flex",
    fontWeight: "bolder",
    fontFamily: "Montserrat, extra bold",
    fontSize: "4em",
    color: 'black',
    textAlign: 'center'
};

export default Judul;