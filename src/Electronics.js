import { useEffect, useState } from 'react'
import { db } from './FireBase'
import { collection, addDoc, deleteDoc, doc, getDoc, document, getDocs } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Men.css'
import KBoys from './KBoys';

function Kids() {
    const [showKidsBoy, setshowKidsBoy]=useState(false);

  

    const handleClick=()=>{
      setshowKidsBoy(true)
    }
  
    // {movie.Company}
  
    return (
      <div>
        {showKidsBoy?(<KBoys/>): ( 
        <div className='CardLayout'>
          <div >
          <Card className='card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/1200x/5d/da/2c/5dda2c526cfb25af3bf492c8573de5fd.jpg" />
            <Card.Body>
              <Card.Title>Boys Shirts and Pants(5yr-15yr)</Card.Title>
              
              <Button onClick={handleClick} className='myB' variant="success">Shop Now</Button>
            </Card.Body>
          </Card>
          </div>
  
  
          <div >
          <Card className='card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://image.made-in-china.com/2f0j00ctkfVZoabMbK/Lilac-Tulle-Girls-Prom-Gowns-Lace-Stage-Performance-Wedding-Flower-Girl-Dresses-B1278.webp" />
            <Card.Body>
              <Card.Title>Girl Clothings(5yr-15yr)</Card.Title>
              
              <Button onClick={handleClick} className='myB' variant="success">Shop Now</Button>
            </Card.Body>
          </Card>
          </div>
  
  
          
  
          
  
          
          {/* <div>
          <Card className='card' style={{ width: '18rem' }}>
            <Card.Img className='img' variant="top" src="https://images.meesho.com/images/products/314458176/nwk3z_512.jpg" />
            <Card.Body>
              <Card.Title>Women Tops </Card.Title>
              
              <Button className='myB' variant="success">Shop Now</Button>
            </Card.Body>
          </Card>
          </div> */}
  
          <div>
          <Card className='card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://bornbabies.com/public/main_category/Girl%20Clothes.webp" />
            <Card.Body>
              <Card.Title>Infants</Card.Title>
              
              <Button className='myB' variant="success">Shop Now</Button>
            </Card.Body>
          </Card>
          </div>
        </div>)}
  
        {/* {showPants && <MPants/>} */}
        
      </div>
    
  )
}

export default Kids
