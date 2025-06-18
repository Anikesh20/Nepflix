import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAvBlLUZVJ8KcdrLvkEa7n6-NGcV1urtS4",
  authDomain: "nepflix-7ef87.firebaseapp.com",
  projectId: "nepflix-7ef87",
  storageBucket: "nepflix-7ef87.firebasestorage.app",
  messagingSenderId: "666063222594",
  appId: "1:666063222594:web:28f8cee1fc4f039adf3adb",
  measurementId: "G-CSRKRN13P5"
};

const firebaseApp = firebase.initializeApp(config);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebaseApp as firebase, auth, db };
