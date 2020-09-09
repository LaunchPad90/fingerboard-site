import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDkhdzcoWl9fe2j5VyQnl6c-27rKPvRxHk",
  authDomain: "fb-81efb.firebaseapp.com",
  databaseURL: "https://fb-81efb.firebaseio.com",
  projectId: "fb-81efb",
  storageBucket: "fb-81efb.appspot.com",
  messagingSenderId: "395295676127",
  appId: "1:395295676127:web:b58091786ed90aa1d2fb6a",
  measurementId: "G-GE5JP8396Q",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOutWithGoogle = () => auth.signOut();

export default firebase;
