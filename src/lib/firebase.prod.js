import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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

const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebaseApp);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebaseApp, auth, db };
