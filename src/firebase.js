import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7PXb-ml98_hfnTqIP9HKMx_-RVHLLAp0",
  authDomain: "pkslack-b750d.firebaseapp.com",
  databaseURL: "https://pkslack-b750d-default-rtdb.firebaseio.com",
  projectId: "pkslack-b750d",
  storageBucket: "pkslack-b750d.appspot.com",
  messagingSenderId: "994855082517",
  appId: "1:994855082517:web:4aa30f68a25b41b1830c1c",
  measurementId: "G-1CKRST52JK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

export default db;
