import React, { useEffect, useState } from 'react';
import img1 from "./assets/thumbnail-1.jpg"
import { Grid } from '@mui/material';
import { API_KEY } from './data';

const TestApi = () => {

    const [data, setdata] = useState([])
    const fetchData = async () => {
        try {
            const result = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxWidth=150&regionCode=US&videoCategoryId=0&key=${API_KEY}`);
            const actualdata = await result.json();
            setdata(actualdata.items);
            console.log(actualdata.items);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Grid container className="d-flex className='pe-2 ps-3'">
                {/* // eslint-disable-next-line array-callback-return */}
                {/* {[...new Array(9)].map(() => ( */}
                {/* // eslint-disable-next-line array-callback-return */}
                {data.map((item, i) => {
                    return (

                        <Grid lg={3} md={4}  >
                            {/* <Grid md={4} className="card"> */}
                            <img src={item.snippet.thumbnails.medium.url} alt="" />
                            <h2>{item.snippet.localized.title}</h2>
                            <h3>{item.snippet.channelTitle}</h3>
                            <p>views-{item.statistics.viewCount}</p>
                            {/* </Grid> */}
                        </Grid>
                    )
                }
                )}



            </Grid>
        </>
    )
}

export default TestApi;