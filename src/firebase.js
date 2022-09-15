import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDeTFihNW772Dcixs0GmKdIWoShbBRIcGg",
  authDomain: "chat-2273a.firebaseapp.com",
  projectId: "chat-2273a",
  storageBucket: "chat-2273a.appspot.com",
  messagingSenderId: "714265868283",
  appId: "1:714265868283:web:dfe9c683e1186b5811fd5e",
  measurementId: "G-8S4SD2MVXK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();