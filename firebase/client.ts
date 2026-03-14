// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB431UU-zhpyTNs4zniyVG9P_aesscKqJo",
    authDomain: "prepwise-d6bbc.firebaseapp.com",
    projectId: "prepwise-d6bbc",
    storageBucket: "prepwise-d6bbc.firebasestorage.app",
    messagingSenderId: "432495856532",
    appId: "1:432495856532:web:949ed548638d6195731d81",
    measurementId: "G-W93824L2X5"
};

// Initialize Firebase
const app = ! getApps.length ?initializeApp(firebaseConfig):getApp();

export const auth=getAuth(app);
export const db=getFirestore(app)