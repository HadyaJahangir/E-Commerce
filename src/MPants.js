import React from 'react'
import { useEffect, useState } from 'react'
import { db } from './FireBase'
import { collection, addDoc, deleteDoc, doc, getDoc, document, getDocs } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Mpants.css"

function MPants() {
    const [mPList, setMPList] = useState([]);

    const menPantsCollection = collection(db, 'Mens', 'Mens Pants', 'Men Pants Collection');

    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(menPantsCollection);

            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            console.log(data)

            setMPList(data); // Assuming you want to set the data in the movieList state
            // console.log(movieList)
            console.log(mPList)
        } catch (error) {
            console.error('Error getting documents: ', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='card-container'>
        {mPList.map((movie, index) => (
          <div key={index} className='ccard'>
            <img className='topimg' src={movie.Image} />
            <p className='mType'>{movie.Type}</p>
            <p className='Compa'>{movie.Company}</p>
            <p className='p'>{movie.Price}</p>
            <Button className='mbtn' variant="success">Buy now</Button>
          </div>
        ))}
        
      </div>
    )
}

export default MPants
