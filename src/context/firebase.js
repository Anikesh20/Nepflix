import { createContext } from 'react';
import { firebaseApp, auth, db } from '../lib/firebase.prod';

export const FirebaseContext = createContext({ auth, db });
