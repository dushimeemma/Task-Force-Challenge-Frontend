import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_API_ID,
  measurementId: process.env.NEXT_PUBLIC_MESUREMENT,
};

try {
  firebase.initializeApp(config);
} catch (error) {}

export default firebase;
