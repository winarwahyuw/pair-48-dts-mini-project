import React  from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import VideoEmbed from '../components/VideoEmbed';


const Video = () => {
    const { id } = useParams();
    return(
        <Container>
            <VideoEmbed embedId={id} />
        </Container>
    )
}


export default Video;