import React from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"
import {auth} from './FireBase'  
import { useEffect, useState } from 'react';
import './login.css'
import Button from 'react-bootstrap/Button';


function LogIn() {
    
  const [loginEmail, setloginEmail]=useState('')
  const [loginPassword, setloginPassword]=useState('')
  const [cUser, setCUser]=useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log(auth);
      setCUser(currentUser);
    });
  }, [auth.currentUser]);


    const Log_in= async()=>{
    try{
      const user=await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
    }catch(error){
      console.log(error.message)   //these errors are basically going to be if the user uses a fake email id etc
    }
  }
 



  console.log(auth.currentUser)
    return (
        <form className='formL' onSubmit={(e) => e.preventDefault()}>
            <div className='inner'>
            <h3 className='log'>Login</h3>
        <input className='inAtt' placeholder='Email' value={loginEmail} onChange={
          (event)=>{
            console.log(event.target.value);
            setloginEmail(event.target.value)
          }
        }/> 
        <br/>
        <input className='inAtt' placeholder='password' value={loginPassword}
        onChange={(event)=>{
          console.log(event.target.value);
            setloginPassword(event.target.value)
          }
        }
        /> <br />
        <Button variant="success" onClick={Log_in}>Login</Button>
       </div> 
       {/* <h4>Logged-in user: {cUser?.email}</h4> */}
        </form>

    )
}

export default LogIn
