import React from 'react';
import {Box,Button, Container, Grid} from "@material-ui/core";


function Loader() {
    return (
        <Container>
        <Grid container alignItems={"center"}  justify={"center"} style={{height:window.innerHeight - 50}}>


            <Grid container alignItems={"center"}justify={"center"}><div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></Grid>
        </Grid>
    </Container>
    );
}

export default Loader;