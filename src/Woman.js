import { useEffect, useState } from 'react'
import { db } from './FireBase'
import { collection, addDoc, deleteDoc, doc, getDoc, document, getDocs } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Men.css'
import WomenPants from './WomenPants';

function Woman() {

  const [showWPants, setShowWPants]=useState(false);

  

  const handleClick=()=>{
    setShowWPants(true)
  }

  // {movie.Company}

  return (
    <div>
      {showWPants?(<WomenPants/>): ( 
      <div className='CardLayout'>
        <div >
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.meesho.com/images/products/314458176/nwk3z_512.jpg" />
          <Card.Body>
            <Card.Title>Women Pants</Card.Title>
            
            <Button onClick={handleClick} className='myB' variant="success">Shop Now</Button>
          </Card.Body>
        </Card>
        </div>


        <div >
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71gkjYKdwUL._AC_UY1100_.jpg" />
          <Card.Body>
            <Card.Title>Women Top</Card.Title>
            
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
          <Card.Img variant="top" src="https://rukminim2.flixcart.com/image/850/1250/xif0q/jacket/f/a/p/m-1-no-66316y-breil-by-fort-collins-original-imagtdshktk75tgg.jpeg?q=20" />
          <Card.Body>
            <Card.Title>Women Jacket</Card.Title>
            
            <Button className='myB' variant="success">Shop Now</Button>
          </Card.Body>
        </Card>
        </div>
      </div>)}

      {/* {showPants && <MPants/>} */}
      
    </div>
  )
}

export default Woman
