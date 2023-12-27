import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDgNZyfaUruYIzy6fbbWrzQ9nV31zKIl6s",
    authDomain: "ecomaut-8f4b8.firebaseapp.com",
    projectId: "ecomaut-8f4b8",
    storageBucket: "ecomaut-8f4b8.appspot.com",
    messagingSenderId: "973378158289",
    appId: "1:973378158289:web:34e68349b0f52a20ad8ff0",
    measurementId: "G-2PJ0CP62DL"
  };

  const app= initializeApp(firebaseConfig)

  export  const auth=getAuth(app)
  export const db=getFirestore(app)