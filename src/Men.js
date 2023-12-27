import { useEffect, useState } from 'react'
import { db } from './FireBase'
import { collection, addDoc, deleteDoc, doc, getDoc, document, getDocs } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Men.css'
import MPants from './MPants';


function Men() {

  
  const [showPants, setShowPants]=useState(false);

  

  const handleClick=()=>{
    setShowPants(true)
  }

  // {movie.Company}

  return (
    <div>
      {showPants?(<MPants/>): ( 
      <div className='CardLayout'>
        <div >
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://5.imimg.com/data5/GU/XR/TY/SELLER-6144399/summer-trousers.jpg" />
          <Card.Body>
            <Card.Title>Men Pants</Card.Title>
            
            <Button onClick={handleClick} className='myB' variant="success">Shop Now</Button>
          </Card.Body>
        </Card>
        </div>
        <div>
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img className='img' variant="top" src="https://assets.ajio.com/medias/sys_master/root/20230524/ZbSN/646e41c542f9e729d7ab80ac/-473Wx593H-469190762-black-MODEL.jpg" />
          <Card.Body>
            <Card.Title>Men T-Shirts</Card.Title>
            
            <Button className='myB' variant="success">Shop Now</Button>
          </Card.Body>
        </Card>
        </div>

        <div>
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.kosha.co/journal/wp-content/uploads/2022/07/winter-jacket-for-men.jpeg" />
          <Card.Body>
            <Card.Title>Men Jacket</Card.Title>
            
            <Button className='myB' variant="success">Shop Now</Button>
          </Card.Body>
        </Card>
        </div>
      </div>)}

      {/* {showPants && <MPants/>} */}
      
    </div>
  )
}

export default Men
