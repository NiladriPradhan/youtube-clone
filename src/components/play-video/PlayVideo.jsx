// /* eslint-disable jsx-a11y/iframe-has-title */
// import React, { useEffect, useState } from 'react';
// import './playvideo.css';
// import video1 from '../../assets/video2.mp4';
// import h2 from '../../assets/img3.jpg';
// import { BatchPrediction, Save, SaveAs, SavedSearch, Share, ThumbDownAltOutlined, ThumbDownAltRounded, ThumbDownOffAltOutlined, ThumbUp, ThumbUpAltOutlined } from '@mui/icons-material';
// import { Avatar } from '@mui/material';
// import { API_KEY, value_converter } from '../../data';
// import moment from 'moment';
// import { views_counter } from '../../data';
// import { useParams } from 'react-router-dom';


// const PlayVideo = () => {
    
//     const { videoId } = useParams();
    
//     const [apidata, setApiData] = useState(null);
//     const [channelData, setChannelData] = useState(null);
//     const [commentData, setcommentData] = useState([]);
    


//     const fetchVideoData = async () => {
//         // fetching video Data
//         const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
//         // await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]))
//         const actualdata = await fetch(videoDetails_url);
//         const res = actualdata.json();
//         setApiData(res.data);
//     }
//     const fetchOtherData = async () => {
//         // fetching data
//         const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata?.snippet?.channelId}&key=${API_KEY}`;
//         await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))

//         // fetching comment data
//         const comment_url = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
//         await fetch(comment_url).then(res => res.json()).then(data => setcommentData(data.items))

//     }



//     useEffect(() => {
//         fetchVideoData();
//     }, [videoId]);
//     useEffect(() => {
//         fetchOtherData();
//     }, [apidata]);
//     return (
//         <>
//             <div className="play_video">
//                 {/* <video src={video1} controls autoPlay muted ></video> */}
//                 <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
//                 {/* <h3>Best Youtube channel to learn web development</h3> */}
//                 <h3>{apidata ? apidata?.snippet.title : "Title Here"} </h3>
//                 <div className="play_video_info">
//                     <p>{apidata ? value_converter(apidata.statistics.viewCount) : "16K"} views &bull;{apidata ? moment(apidata.snippet.publishedAt).fromNow() : ""}</p>
//                     <div>
//                         <span><ThumbUpAltOutlined /> {apidata ? value_converter(apidata.statistics.likeCount) : "155"} </span>
//                         <span><ThumbDownOffAltOutlined />11 </span>
//                         <span><Share />Share </span>
//                         <span><Save />Save</span>
//                     </div>
//                 </div>
//                 <hr />
//                 <div className="publisher">
//                     <img src={channelData ? channelData?.snippet.thumbnails.default.url : ""} alt="" />
//                     <div className='pub_info'>
//                         <p>{apidata ? apidata?.snippet.channelTitle : "Channel Title Here"}</p>
//                         <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "10k"}Subscriber</span>
//                     </div>
//                     <button>Subscribe</button>
//                 </div>
//                 <div className="video_description">
//                     <p>{apidata ? apidata?.snippet.description.slice(0, 240) : "Description Here"}</p>
//                     <hr />
//                     <h3>{apidata ? value_converter(apidata.statistics.commentCount) : "120"}Comments</h3>

//                     {commentData.map((item, index) => {
//                         return (
//                             <div className="comment" key={index}>
//                                 {/* <Avatar /> */}
//                                 <img src={item?.snippet.topLevelComment?.snippet.authorProfileImageUrl} alt="" width={"50px"} height={"50px"} style={{ borderRadius: "50%" }} />
//                                 <div>
//                                     <h3>{item?.snippet.topLevelComment?.snippet.authorDisplayName} <span>1 day ago</span> </h3>
//                                     <p>{item?.snippet.topLevelComment?.snippet.textDisplay}
//                                     </p>
//                                     <div className="comment_action gap-2">
//                                         <div>
//                                             <ThumbUpAltOutlined />
//                                             <span>{item?.snippet.topLevelComment?.snippet.likeCount}</span>
//                                         </div>
//                                         <ThumbDownAltOutlined />
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })}

//                 </div>
//             </div>
//         </>
//     )
// }

// export default PlayVideo;



import React, { useEffect, useState } from 'react';
import './playvideo.css';
import { ThumbUpAltOutlined, ThumbDownOffAltOutlined, Share, Save } from '@mui/icons-material';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';

const PlayVideo = () => {
    const { videoId } = useParams();
    
    const [apidata, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        // Fetching video data
        const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
        const videoRes = await fetch(videoDetailsUrl);
        const videoData = await videoRes.json();
        setApiData(videoData.items[0]);
    };

    const fetchOtherData = async () => {
        if (!apidata?.snippet?.channelId) return; // Ensure apidata is available
        
        // Fetching channel data
        const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${apidata?.snippet?.channelId}&key=${API_KEY}`;
        const channelRes = await fetch(channelDataUrl);
        const channelData = await channelRes.json();
        setChannelData(channelData.items[0]);

        // Fetching comment data
        const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        const commentRes = await fetch(commentUrl);
        const commentDatas = await commentRes.json();
        setCommentData(commentDatas.items);
    };

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        fetchOtherData();
    }, [apidata]);

    return (
        <div className="play_video">
            <iframe 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <h3>{apidata ? apidata.snippet.title : "Title Here"}</h3>
            
            <div className="play_video_info">
                <p>
                    {apidata ? value_converter(apidata.statistics.viewCount) : "16K"} views &bull; 
                    {apidata ? moment(apidata.snippet.publishedAt).fromNow() : ""}
                </p>
                <div>
                    <span><ThumbUpAltOutlined /> {apidata ? value_converter(apidata.statistics.likeCount) : "155"}</span>
                    <span><ThumbDownOffAltOutlined /> 11</span>
                    <span><Share /> Share</span>
                    <span><Save /> Save</span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img 
                    src={channelData ? channelData.snippet.thumbnails.default.url : ""} 
                    alt={apidata?.snippet.channelTitle || "Channel Avatar"} 
                />
                <div className='pub_info'>
                    <p>{apidata ? apidata.snippet.channelTitle : "Channel Title Here"}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "10k"} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="video_description">
                <p>{apidata ? apidata.snippet.description.slice(0, 240) : "Description Here"}</p>
                <hr />
                <h3>{apidata ? value_converter(apidata.statistics.commentCount) : "120"} Comments</h3>

                {commentData.map((item, index) => (
                    <div className="comment" key={index}>
                        <img 
                            src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} 
                            alt="Author" 
                            width="50px" 
                            height="50px" 
                            style={{ borderRadius: "50%" }} 
                        />
                        <div>
                            <h3>{item?.snippet?.topLevelComment?.snippet?.authorDisplayName} <span>1 day ago</span></h3>
                            <p>{item?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
                            <div className="comment_action gap-2">
                                <div>
                                    <ThumbUpAltOutlined />
                                    <span>{item?.snippet?.topLevelComment?.snippet?.likeCount}</span>
                                </div>
                                <ThumbDownOffAltOutlined />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayVideo;
