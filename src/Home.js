import React from 'react'
import './Home.css'
import banner_mens from './banner_mens.png'
import banner_women from './banner_women.png'
import fashon from './fashon.png'
import back from './1.png'
import frame from "./Untitled design (2).png"
import Carousel from 'react-bootstrap/Carousel';
function Home() {
  return (
    <div className='Home'>
        <img className='frame' src={frame}/>
     <div class="grid-container">
        
        <img className='back' src={back}/>
        <div className='slogan'> <span>Fashion at Your Fingertips:</span> Shop Online, Shine Offline!</div>
        <div><img className='photo'  src='https://img.freepik.com/free-photo/full-length-portrait-happy-excited-girl-bright-colorful-clothes-holding-shopping-bags-while-standing-showing-peace-gesture-isolated_231208-5946.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais'/></div>
        
    </div>

    {/* <h1 className='zabardasti'>Lets Shop in Style!</h1> */}
    {/* <img className='zabardasti' src={fashon}/> */}

    {/* <img width="60%"  height="60%" src='https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png'/> */}
<div className='cContainer'>
    <div className='checks' ><b style={{fontSize:'17px', fontWeight: 350}}><img className='tick' height='40%' width='40%' src='https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png'/> Good Quality products</b></div>
    <div className='checks'><b style={{fontSize:'17px' , fontWeight: 350}}><img className='tick' height='40%' width='40%' src='https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png'/>Timely delivery</b></div>
    <div className='checks'><b style={{fontSize:'17px' , fontWeight: 350}}><img className='tick' height='40%' width='40%' src='https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png'/>Return within 20 days of purchase</b></div>
    </div>
    <img className='banner'  height='20%' width='100%' src="https://marketplace.canva.com/EAFIMHQ5yhE/1/0/1600w/canva-orange-and-teal-summer-sale-kids-fashion-bright-website-banner-L6kUMOWkkho.jpg"/>

    
    <div className='test'>
    <img className='banner2'  height="1000px" src="https://marketplace.canva.com/EAFKwuPx9Oo/1/0/800w/canva-beige-minimalist-fashion-business-banner-ddhYP2t5XX8.jpg"/>
    <p className='banner2_side'>Shop Now!!!</p>

    <p className='sidetext'>
    <span style={{fontSize:'80px', fontWeight: 550}}>Triple Treat Delight</span> <br/> <br/> <h4 style={{ fontWeight: 200}}>Buy 2, Get the 3rd at 50% Off!: </h4>
    "Indulge in a shopping spree like never before with our exclusive Triple Treat Delight offer! Elevate your style game by purchasing any two of your favorite products, and we'll sweeten the deal by giving you the third item at an irresistible 50% off. It's the perfect opportunity to revamp your wardrobe, mix and match styles, and enjoy incredible savings. Don't miss out on this limited-time offer – because a triple treat is always better than just two!"
    </p>
    </div>
    </div>
  )
}

export default Home
