import { Col, Row, Stack } from 'react-bootstrap';
import BigDisplay from '../Reuseable/bigDisplay';
import SmallDisplay from "../Reuseable/smallDisplay";
import GifDisplay from '../Reuseable/GifDisplay';
import Judul from '../Reuseable/Judul';
import Carousels from '../Reuseable/carousels';
import "../WebPage/webPageStyle.css";

function Beranda () {
    return(
        <Stack gap={5}>
            <div>
                <GifDisplay/>
            </div>
            <div >
                <Judul/>
            </div>
            <div className='half-background'>
                <BigDisplay/>
            </div>
            <Judul/>
            <div className='background'>
                <Stack gap={4}>
                    <Row className="justify-content-md-center" lg ="5">
                        <Col xs lg="5">
                            <SmallDisplay></SmallDisplay>
                        </Col>
                        <Col xs lg="5">
                            <SmallDisplay></SmallDisplay>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" lg = "5">
                        <Col xs lg="2">
                            <Carousels/>
                        </Col>
                        <Col xs lg="2">
                            <Carousels/>
                        </Col>
                        <Col xs lg="2">
                            <Carousels/>
                        </Col>
                        <Col xs lg="2">
                            <Carousels/>
                        </Col>
                    </Row>
                </Stack>
            </div>
            <Judul/>
            <div>
                <Stack gap={5}>
                    <Row className="justify-content-md-center">
                        <Col xs lg="5">
                            <SmallDisplay></SmallDisplay>
                        </Col>
                        <Col xs lg="5">
                            <SmallDisplay></SmallDisplay>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col xs lg="2">
                            <Carousels/>
                        </Col>
                        <Col xs lg="2">
                            <Carousels/>
                        </Col>
                        <Col xs lg="2">
                            <Carousels/>
                        </Col>
                        <Col xs lg="2">
                            <Carousels/>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col xs lg="2">
                            <Carousels/>
                        </Col>
                        <Col xs lg="2">
                            <Carousels/>
                        </Col>
                        <Col xs lg="2">
                            <Carousels/>
                        </Col>
                        <Col xs lg="2">
                            <Carousels/>
                        </Col>
                    </Row>
                </Stack>
            </div>
        </Stack>
    );
};

export default Beranda;