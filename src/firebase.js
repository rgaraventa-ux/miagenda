import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN6OLBBSC-VzdOKFLvRA0THC0hm1mePuY",
  authDomain: "miagenda-37996.firebaseapp.com",
  projectId: "miagenda-37996",
  storageBucket: "miagenda-37996.firebasestorage.app",
  messagingSenderId: "626485085205",
  appId: "1:626485085205:web:1be15baf1d7ab62676ba1c"
};

const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
