import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDQdAdn0Lz1dmok-uHKYE2BgmxSlhX2hVo",
    authDomain: "reso-nest.firebaseapp.com",
    projectId: "reso-nest",
    storageBucket: "reso-nest.appspot.com",
    messagingSenderId: "528135740272",
    appId: "1:528135740272:web:42f3c467dac75de94d8db5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);