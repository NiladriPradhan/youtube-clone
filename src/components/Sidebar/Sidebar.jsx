import React from 'react';
import './sidebar.css';
import { AutoMode, Gamepad, Games, Home, MusicNote, Newspaper, Sports } from '@mui/icons-material';
import { GrTechnology } from 'react-icons/gr';
import { BiLogOut } from 'react-icons/bi';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const Sidebar = ({ sidebar, category, setcategory }) => {
    return (
        <>
            <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
                <div className="shortcut_links">
                    <div className={`side_link ${category === 0 ? "active" : ""} d-flex`} onClick={() => setcategory(0)}>
                        <Home />
                        <p>Home</p>
                    </div>
                    <div className={`side_link ${category === 20 ? "active" : ""} d-flex`} onClick={() => setcategory(20)}>
                        <SportsEsportsIcon />
                        <p>Gaming</p>
                    </div>
                    <div className={`side_link ${category === 2 ? "active" : ""} d-flex`} onClick={() => setcategory(2)}>
                        <TimeToLeaveIcon />
                        <p>Automoiles</p>
                    </div>
                    <div className={`side_link ${category === 17 ? "active" : ""} d-flex`} onClick={() => setcategory(17)}>
                        <SportsBasketballIcon />
                        <p>Sports</p>
                    </div>
                    <div className={`side_link ${category === 24 ? "active" : ""} d-flex`} onClick={() => setcategory(24)}>
                        <LiveTvIcon />
                        <p>Entertainment</p>
                    </div>
                    <div className={`side_link ${category === 28 ? "active" : ""} d-flex`} onClick={() => setcategory(28)}>
                        <Home />
                        <p>Technology</p>
                    </div>
                    <div className={`side_link ${category === 10 ? "active" : ""} d-flex`} onClick={() => setcategory(10)}>
                        <MusicNote />
                        <p>Music</p>
                    </div>
                    <div className={`side_link ${category === 21 ? "active" : ""} d-flex`} onClick={() => setcategory(21)}>
                        <Home />
                        <p>Blogs</p>
                    </div>
                    <div className={`side_link ${category === 25 ? "active" : "" }`} onClick={() => setcategory(25)}>
                        <Newspaper />
                        <p>News</p>
                    </div>

                    <hr />
                </div>
                <div className="subscribed_list">
                    <h3>Subscribed</h3>
                    <div className="side_link">
                        <img src={img1} alt="" />
                        <p>Web dev</p>
                    </div>
                    <div className="side_link">
                        <img src={img2} alt="" />
                        <p>dev Simplified</p>
                    </div>
                    <div className="side_link">
                        <img src={img3} alt="" />
                        <p>Web craft</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;