import React, { useEffect, useState } from 'react';
import './recomended.css';
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router-dom';

const RecomendedVideos = ({ categoryId }) => {
    const [apidata, setApiData] = useState([]);

    const fetchData = async () => {
        const relatedVideosUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        const response = await fetch(relatedVideosUrl);
        const data = await response.json();
        setApiData(data.items || []);  // Use an empty array if no items are returned
    };

    useEffect(() => {
        fetchData();
    }, [categoryId]);  // Fetch new data when categoryId changes

    return (
        <div className="recomended ps-3">
            {apidata.length > 0 ? (
                apidata.map((item) => (
                    <Link to={`/video/${item.snippet?.categoryId}/${item.id}`} key={item.id}>
                        <div className="mb-2 d-flex">
                            <img 
                                src={item.snippet?.thumbnails?.medium?.url || ''} 
                                alt={item.snippet?.title || 'Video thumbnail'} 
                                width="180px" 
                            />
                            <div className='reco_info'>
                                <h4>{item.snippet?.title || 'No title available'}</h4>
                                <p>{item.snippet?.channelTitle || 'Unknown channel'}</p>
                                <p>{value_converter(item.statistics?.viewCount) || 'No views'} Views</p>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No recommended videos found.</p>
            )}
        </div>
    );
};

export default RecomendedVideos;
