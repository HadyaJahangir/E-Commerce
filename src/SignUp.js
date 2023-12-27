
import { useEffect, useState } from 'react';
import './App.css';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"
import { updateProfile } from 'firebase/auth';

import { auth } from './FireBase'
import './SignUp.css'
import Button from 'react-bootstrap/Button';
import Home from "./Home"


function SignUp({ form }) {

  const [RegisterEmail, setRegisterEmail] = useState('')
  const [RegisterPassword, setRegisterpassword] = useState('')
  const [status, setStatus] = useState(true)
  const [displayName, setDisplayName] = useState('');

  //   const [loginEmail, setloginEmail]=useState('')
  //   const [loginPassword, setloginPassword]=useState('')
  const [cUser, setCUser] = useState({})



  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log(auth);
      setCUser(currentUser);
    });
  }, [auth.currentUser]);

  //  console.log(displayName)

  

  const Register = async () => {
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, RegisterEmail, RegisterPassword);
      const user = userCredential.user;

      // Update display name
      await updateProfile(user, { displayName: displayName });
      // console.log("hew:")
      console.log(user.displayName)





      // console.log('User created:', user);
    } catch (error) {
      console.log(error.message)   //these errors are basically going to be if the user uses a fake email id etc
      alert(error.message)
    }
    setStatus(!status);
    form(status, displayName)

  }
  //   const login= async()=>{
  //     try{
  //       const user=await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
  //     }catch(error){
  //       console.log(error.message)   //these errors are basically going to be if the user uses a fake email id etc
  //     }
  //   }
  //   const logout=async ()=>{
  //       await signOut(auth);
  //   }
  return (
    
      status?( 
      <form className = 'form' onSubmit = {(e) => e.preventDefault()
      } >
      <div className="App">

      <h3 className='heading'>Register</h3>

      <label className='att'  >First Name: </label><br />
      <input required value={displayName} onChange={(e) => setDisplayName(e.target.value)} /><br />

      <label className='att'>Last Name:</label><br />
      <input required />
      <br />
      <label className='att' required>Phone Number:</label><br />
      <input type='number' required />
      <br />

      <label className='att'>Email id:</label><br />
      <input type='Email' value={RegisterEmail} onChange={
        (event) => {
          console.log(event.target.value);
          setRegisterEmail(event.target.value)
        }
      }
        required
      />
      <br />
      <label className='att'>Password: </label><br />
      <input type='password' value={RegisterPassword} onChange={
        (event) => {
          console.log(event.target.value);
          setRegisterpassword(event.target.value)
        }
      } required />
      <br />
      <Button className='att' onClick={Register} variant="success">Create</Button>{' '}


      {/* <div>
        <h3>Login</h3>
        <input placeholder='Email' value={loginEmail} onChange={
          (event)=>{
            console.log(event.target.value);
            setloginEmail(event.target.value)
          }
        }/>
        <input placeholder='password' value={loginPassword}
        onChange={(event)=>{
          console.log(event.target.value);
            setloginPassword(event.target.value)
          }
        }
        />
        <button onClick={login}>Login</button>
       </div> */}
      {/* if we log out the current user is empty and hence we are trying to acces the current users email from an emoty current user object and hence will get an array so what this line actually says is that if the cUser is not empty then acces the .email of the current user  */}
      {/* <h4>Logged-in user: {cUser?.email}</h4>  */}


      {/* <button onClick={logout}>Sign-out </button> */}

      </div>
      </form >):  <Home /> 

  );
}

export default SignUp;

