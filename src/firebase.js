import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCr4WRnI9kUptniuEYjYo1oJOb72meIemA",
    authDomain: "rookas-imessage-app.firebaseapp.com",
    projectId: "rookas-imessage-app",
    storageBucket: "rookas-imessage-app.appspot.com",
    messagingSenderId: "829707061689",
    appId: "1:829707061689:web:d6ab54dc1849fffe1f0e68",
    measurementId: "G-T7L7615VYQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;
