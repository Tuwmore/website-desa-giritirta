import { Stack, Image, Button } from "react-bootstrap"
import ThumbnailAdmin from "../Reuseable/thumbnailAdmin"
import "./webPageStyle.css"

function BerandaAdmin (){
    return (
        <Stack gap={3}>
            <Image/>
            <Button> +Tambah </Button>
            <ThumbnailAdmin/>
            <ThumbnailAdmin/>
            <ThumbnailAdmin/>
            <ThumbnailAdmin/>
            <ThumbnailAdmin/>
        </Stack>
    )
}

export default BerandaAdmin;