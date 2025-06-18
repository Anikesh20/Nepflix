import firebase from 'firebase/app/dist/index.cjs.js';
import 'firebase/firestore/dist/index.cjs.js';
import { seedDatabase } from './src/seed.js';

const config = {
  apiKey: "AIzaSyAvBlLUZVJ8KcdrLvkEa7n6-NGcV1urtS4",
  authDomain: "nepflix-7ef87.firebaseapp.com",
  projectId: "nepflix-7ef87",
  storageBucket: "nepflix-7ef87.firebasestorage.app",
  messagingSenderId: "666063222594",
  appId: "1:666063222594:web:28f8cee1fc4f039adf3adb",
  measurementId: "G-CSRKRN13P5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

// Run the seed function
seedDatabase(firebase)
  .then(() => {
    console.log('Database seeded successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error seeding database:', error);
    process.exit(1);
  }); 