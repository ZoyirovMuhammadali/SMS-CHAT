import {Box,Button, Container, Grid} from "@material-ui/core";
import React  from 'react';
import {useContext} from "react";
import {Context} from "../index";
import firebase from "firebase/compat/app";


function Login() {
    const { auth }=useContext(Context);
    const login=async () =>{
        const provider= new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        console.log(user);
    };
    return <Container>
        <Grid container alignItems={"center"}  justify={"center"} style={{height:window.innerHeight - 50}}>


            <Grid style={{width:400, background:"lightblue"}}
                  container alignItems={"center"}
                  justify={"center"}
            >
                <Box p={5} >
                    <Button onClick={login} variant={'outlined'}>Login With GOOGLE</Button>
                </Box>
            </Grid>
        </Grid>
    </Container>
}

export default Login;