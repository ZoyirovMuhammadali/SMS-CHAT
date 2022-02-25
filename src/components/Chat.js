import { Avatar, Button, Container,Grid, TextField } from '@material-ui/core';
import React, {useContext, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Context} from '..';
import {useCollectionData} from "react-firebase-hooks/firestore"
import Loader from './Loader';
import firebase from "firebase/compat/app"


function Chat() {
    const {auth, firestore}=useContext(Context)
    const [user]=useAuthState(auth);
    const [value,setValue]=useState("");
    const [messages,loading]=useCollectionData(
      firestore.collection("messages").orderBy("createdAt")
    )
    const sendMessage= async()=>{
      firestore.collection('messages').add({
        uid:user.uid,
        displayName:user.displayName,
        photoURL:user.photoURL,
        text:value,
        createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      });
      setValue("");
    };

    if (loading){
      return <Loader/>
    }

    return (
        <Container>
          <Grid container style={{height:window.innerHeight-50, marginTop:8}} justify={'center'} >
            <div 
            style={{width:'80%',
            height:'68vh',
            border:'1px solid grey',
            overflowX:"auto",
            backgroundImage:"url("+"https://images.unsplash.com/photo-1625973385769-b9113cf6c2cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"+")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>

              {messages.map((message)=> (
               <div 
                 style={{
                    margin:10,
                    backgroundColor:
                       user.uid===message.uid
                          ? "rgba(255,255,255,0.7)"
                          :"rgba(228,83,167,0.594)",
                     marginLeft:user.uid===message.uid ? "auto" :"10px",
                     width:"40%",
                     padding:5,
                     borderRadius:"10px",
                  }} 
                  >
               <Grid container style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
                 <Avatar src={message.photoURL} />
                 <div>{message.displayName}</div>

               </Grid>

               <div>{message.text}</div>
             </div>

              ))}


            </div>
            <Grid 
            container direction={'column'} alignItems={'flex-end'} style={{width:'88%'}}>
              <TextField style={{background:"white"}} placeholder={'Message'} fullWidth variant={'outlined'} 
              value={value}
              onChange={e=>setValue(e.target.value)}
              />
              <Button variant={'outlined'} style={{background:"grey", marginTop:4}}  
              onClick={sendMessage}>Send message</Button>
            </Grid>
          </Grid>
        </Container>
    );
}

export default Chat;
