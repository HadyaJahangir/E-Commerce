import { Route, Routes, Link} from 'react-router-dom';
import { signOut } from 'firebase/auth';
// import Home from './Home'
import {auth} from './FireBase'
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Home from './Home'
import Electronics from './Electronics'
import Woman from './Woman'
import Men from './Men'
import Jewel from './Jewel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SignUp from './SignUp'
// import LogIn from './LogIn' 
import LogIn from './LogIn';


function App() {

  const [form, setForm] = useState(false)
  const [name, setName] = useState('')
  const [loginf, setLoginf]=useState(false)
  const [mStatus, setMStatus]= useState(false)

 

  const handleLog_out=async()=>{
    try {
      await auth.signOut();
      setName('');
      // setMStatus(!form);
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
    
  }
  const handleSign_Up = (newStatus, name) => {
    setForm(!form);
    
    document.body.classList.toggle('special', !form);
    setName(name);
    setMStatus(newStatus)
  }
  console.log(name)

  const handlelog_in=()=>{
    setLoginf(!loginf);
  }

  console.log(mStatus)
  return (
    <div className="App">



      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container >
          <Navbar.Brand href="#home" className='brand'> <Link style={{ textDecoration: 'none', color: 'black' }} to="/">ShopAway</Link > </Navbar.Brand>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ml-auto">

              <NavDropdown title="Catigories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"> <Link style={{ textDecoration: 'none', color: 'black' }} to="/men">Men</Link> </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link style={{ textDecoration: 'none', color: 'black' }} to="/Woman">Woman</Link>
                </NavDropdown.Item>
                
                <NavDropdown.Item href="#action/3.3"><Link style={{ textDecoration: 'none', color: 'black' }} to='/electronics'>Kids</Link></NavDropdown.Item>


              </NavDropdown>
             
                
           {name!=''?  
           <>
           <img className='user'  src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"/>
           <span className='userName'>   {name}</span> 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="success" className='btn3' onClick={handleLog_out}>Log-Out</Button>{' '}

           </>
  : <>


  <Button className='btn' variant="outline-success" onClick={handlelog_in} >Log-In</Button>{' '} &nbsp;&nbsp;
  <Button className='btn2' variant="success" onClick={handleSign_Up}>Sign-Up</Button>{' '}
</>}
           </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

      {loginf && 
        <LogIn />

      }

      {form &&
        <SignUp form={handleSign_Up} />
      }

      
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/men' element={<Men />} />
        <Route path='/Woman' element={<Woman />} />
        <Route path='/Jewelary' element={<Jewel />} />
        <Route path='/electronics' element={<Electronics />} />
      </Routes>

      <footer className='footer'>
        Footer
      </footer>
    </div>
  );
}

export default App;
