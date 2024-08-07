import { Stack } from "react-bootstrap";
import GifDisplay from "../Reuseable/GifDisplay";
import Judul from "../Reuseable/Judul";
import "./webPageStyle.css";

function Artikel () {
    return(
        <Stack gap={5}>
            <GifDisplay/>
            <Judul/>
            <div style={artikelContainerStyle}>
                <p style={textStyle}>
                    Kegiatan dilaksanakan sebagai kelanjutan dari program sebelumnya yaitu pendesainan website desa. Program ini dilaksanakan guna memperbaharui tampilan website desa Giritirta menjadi lebih moderen dan dapat dijangkau oleh lebih banyak masyarakat. Juga guna melakukan efisiensi dari sisi desa dengan memandirikan pengelolaan website desa Giritirta.
                </p>
            </div>
            <GifDisplay/>
            <div style={artikelContainerStyle}>
                <p style={textStyle}>
                    Kegiatan dilaksanakan sebagai kelanjutan dari program sebelumnya yaitu pendesainan website desa. Program ini dilaksanakan guna memperbaharui tampilan website desa Giritirta menjadi lebih moderen dan dapat dijangkau oleh lebih banyak masyarakat. Juga guna melakukan efisiensi dari sisi desa dengan memandirikan pengelolaan website desa Giritirta.
                </p>
            </div>
        </Stack>
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
