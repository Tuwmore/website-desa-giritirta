import { Stack, Image, Button } from "react-bootstrap"
import ThumbnailAdmin from "../Reuseable/thumbnailAdmin"
import "./webPageStyle.css"

function BerandaAdmin (){
    return (
        <Stack gap={3}>
            <div style={{alignSelf: "center"}}>
                <Button size="lg" style={buttonStyle}> + Tambah </Button>
            </div>
            <ThumbnailAdmin/>
            <ThumbnailAdmin/>
            <ThumbnailAdmin/>
            <ThumbnailAdmin/>
            <ThumbnailAdmin/>
        </Stack>
    )
}

export default BerandaAdmin;

const buttonStyle = {
    backgroundColor: "rgba(0, 189, 157, 0.6)",
    fontFamily: "Montserrat",
    fontWeight: "500",
    border: 'none', // Remove borders
    color: 'White', 
    textAlign: 'center', 
    fontSize: '24px', 
    cursor: 'pointer', 
    borderRadius: '7px',
}