import { Stack } from "react-bootstrap";
import GifDisplay from "../Reuseable/GifDisplay";
import Judul from "../Reuseable/Judul";
import "./webPageStyle.css";

function Artikel () {
    return(
        <Stack gap={5}>
            <GifDisplay/>
            <Judul/>
            <div>
                <p>
                    fnqwjnfjqfjqwjfbqbijwf
                </p>
            </div>
            <GifDisplay/>
            <div>
                <p>
                    dsakjdnfbqfbhqbwhfbhqwbfhjqwb
                </p>
            </div>
        </Stack>
    );
};

export default Artikel;