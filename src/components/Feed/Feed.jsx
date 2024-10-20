import React, { useEffect, useState } from 'react';
import './Feed.css';
import thumbnail1 from '../../assets/thumbnail-1.jpg';
import thumbnail2 from '../../assets/thumbnail-2.jpg';
import thumbnail3 from '../../assets/thumbnail-3.jpg';
import thumbnail4 from '../../assets/thumbnail-4.jpg';
import thumbnail5 from '../../assets/thumbnail-5.jpg';
import thumbnail6 from '../../assets/thumbnail-6.jpg';
import thumbnail7 from '../../assets/thumbnail-7.jpg';
import thumbnail8 from '../../assets/thumbnail-8.jpg';
import thumbnail9 from '../../assets/thumbnail-9.jpg';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

const Feed = ({ categoryy }) => {

    const [data, setdata] = useState([])
    const fetchData = async () => {
        // const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxWidth=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        // const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxWidth=150&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        // await fetch(videoList_url).then(response => response.json()).then(data => setdata(data.items));
        // console.log(data.item);
        try {
            const result = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryy}&key=${API_KEY}`);
            const actualdata = await result.json();
            setdata(actualdata.items);
            console.log(actualdata.items);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [categoryy]);

    // const concatstr = (str, length) => {
    //     return str.length > length ? str.substr(0, length) + "..." : str;
    // }
    // const Thumbnail = ({ img, title, channelName, time_stamp }) => {
    //     return (
    //         <Grid item md={2.9} sm={6} xs={12} className="card d-flex flex-row _template">
    //             {data.map((item, index) => {
    //                 return (
    //                     <Link to={`video/20/4521`}>
    //                         <img src={img} alt="" />
    //                         <h2  >{concatstr(title, 50)}</h2>
    //                         <h3>{channelName}</h3>
    //                         <p>{time_stamp}</p>
    //                     </Link>
    //                 )
    //             })}

    //         </Grid>
    //     )
    // }
    const constr = (str, length) => {
        return str.length > length ? str.substr(0, length) + "..." : str;
    }
    return (
        <>
            <Grid container className="feed d-flex row-gap-3 column-gap-3 py-1">

                {data.length === 0 ? <h1>Loading...</h1> :
                    data.map((item, i) => {
                        return (
                            <>
                                <Grid item md={2.8} key={i}>
                                    <Link to={`video/${item?.snippet?.categoryId}/${item?.id}`} className='card' >
                                        <img src={item?.snippet?.thumbnails?.medium?.url} alt="" />
                                        <div className="info">
                                            <h2>{constr(item?.snippet?.localized?.title, 35)}</h2>
                                            <h3>{item?.snippet?.channelTitle}</h3>
                                            <p>{value_converter(item?.statistics.viewCount)} views-<span> {moment(item?.snippet?.publishedAt).fromNow()} </span></p>
                                        </div>
                                    </Link>
                                </Grid>

                            </>
                        )
                    })}
              
            </Grid>
        </>
    )
}

export default Feed;