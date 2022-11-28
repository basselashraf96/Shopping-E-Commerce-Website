// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBA-MTzTYhTQNf8Mn6rhZt-NfLjxaV87JI",
    authDomain: "shop-bec11.firebaseapp.com",
    projectId: "shop-bec11",
    storageBucket: "shop-bec11.appspot.com",
    messagingSenderId: "835908164971",
    appId: "1:835908164971:web:2f1ec39dde1ab2ed48002e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;