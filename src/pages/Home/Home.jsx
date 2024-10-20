import React, { useState } from 'react';
import './home.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import { Grid } from '@mui/material';

const Home = ({ sidebar }) => {

    const [category, setcategory] = useState(0);


    return (
        <>
            {/* <Grid container >
                <Grid item md={2}>
                    <Sidebar sidebar={sidebar} />
                </Grid>
                <Grid item md={10} className={`container ${sidebar ? "" : "large-container"} `}>
                    <Feed />
                </Grid>
            </Grid> */}

            <Sidebar sidebar={sidebar} category={category} setcategory={setcategory} />
            <div className={`containers ${sidebar ? "" : "large-container"} `}>
                <Feed categoryy={category} />
            </div>
        </>
    )
}

export default Home;