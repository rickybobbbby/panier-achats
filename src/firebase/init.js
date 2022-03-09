import firebaseConfig from './config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

// initialiser firebase
export const instanceFirebase = initializeApp(firebaseConfig);

// initialiser fireStore
 export const bdFirestore = getFirestore();