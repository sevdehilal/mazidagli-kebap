// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics";

// Firebase yapılandırma
const firebaseConfig = {
  apiKey: "AIzaSyBOL_B_rIWylWdhsNN30se1lQkiVhkJgLc",
  authDomain: "mazidaglikebap.firebaseapp.com",
  projectId: "mazidaglikebap",
  storageBucket: "mazidaglikebap.firebasestorage.app",
  messagingSenderId: "978280346067",
  appId: "1:978280346067:web:c0dd1d29eded408522ff26",
  measurementId: "G-W6SV4SMRC7"
};

// Firebase başlatma
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Firestore veritabanını başlat
const analytics = getAnalytics(app);

export { db };  // db'yi dışa aktaralım
