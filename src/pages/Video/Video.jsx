import React from 'react';
import './video.css';
import PlayVideo from '../../components/play-video/PlayVideo';
import { Grid } from '@mui/material';
import RecomendedVideos from '../../components/Recomended_Videos/RecomendedVideos';
import { useParams } from 'react-router-dom';

const Video = () => {
    const { videoId, categoryId } = useParams();
    return (
        // <div className="play-container">
        //     <PlayVideo/>
        // </div>
        <Grid container className='pt-4 ps-3'>
            <Grid item md={8}>
                <PlayVideo videoId={videoId} />
            </Grid>
            <Grid item md={4} >
                <RecomendedVideos categoryId={categoryId} />
            </Grid>
        </Grid>
    )
}

export default Video;