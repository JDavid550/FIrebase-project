import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDi-pEJJ9ZEmEh_aMag7-DTJ_7y8-3QVQA",
    authDomain: "fir-e57ab.firebaseapp.com",
    projectId: "fir-e57ab",
    storageBucket: "fir-e57ab.appspot.com",
    messagingSenderId: "226127714582",
    appId: "1:226127714582:web:7ae5d606bea500d7fc5837",
    measurementId: "G-NDYHXHQKZR"
  };

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore(); 