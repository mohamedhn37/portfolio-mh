import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC1ActZi05TmzSJVl4LhrDRxsP3J-iV-8",
  authDomain: "mon-portfolio-710b4.firebaseapp.com",
  projectId: "mon-portfolio-710b4",
  storageBucket: "mon-portfolio-710b4.appspot.com",
  messagingSenderId: "757231594065",
  appId: "1:757231594065:web:b4963b221ca31336e5a670"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
