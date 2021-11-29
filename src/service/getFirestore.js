import * as firebase from 'firebase/app';
import 'firebase/firestore';
import * as dotenv from 'dotenv';

dotenv.config();

const app = firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,

    authDomain: 'coderhouse-react-guido.firebaseapp.com',

    projectId: 'coderhouse-react-guido',

    storageBucket: 'coderhouse-react-guido.appspot.com',

    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDERID,

    appId: process.env.FIREBASE_APP_ID,
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
