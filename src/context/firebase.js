import { createContext } from 'react';
import { firebase, auth, db } from '../lib/firebase.prod';

export const FirebaseContext = createContext({ firebase, auth, db });
