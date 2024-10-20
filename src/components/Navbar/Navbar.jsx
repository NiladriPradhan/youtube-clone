import React from 'react';
import './navbar.css';
import logo from "../../assets/logo.png";
import NotificationsIcon from '@mui/icons-material/Notifications';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import { MenuOpen, Search } from '@mui/icons-material';
import { Avatar, Grid, Menu, MenuList } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ setsidebar }) => {
    return (
        <>
            <Grid container className="flex-div navbar d-flex justify-content-between p-2 bg-light sticky-top">
                <Grid item md={2} sm={4} className="nav-left flex-div">
                    <MenuOpen
                        onClick={() => setsidebar(prev => prev === false ? true : false)}
                    />
                    <Link to={"/"}>
                        <img src={logo} alt="" height={"35px"} />
                    </Link>
                </Grid>
                <Grid item md={6} sm={4} className="nav-center flex-div">
                    <form action="">
                        <input type="text" name="" id="" placeholder='search...' />
                        <Search
                            style={{ color: "gray", cursor: "pointer" }}
                        />
                    </form>
                </Grid>
                <Grid item md={4} sm={4} className="nav-right flex-end">
                    <div className="float-end gap-2 d-flex align-items-center">
                        <VideoCallIcon />
                        <AppsIcon />
                        <NotificationsIcon />
                        <span className='_profile'>
                            <Avatar />
                        </span>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Navbar;