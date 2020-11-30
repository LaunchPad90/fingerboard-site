// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// const config = {
//   apiKey: process.envGATSBY_FIREBASEAPIKEY,
//   authDomain: process.envGATSBY_FIREBASEAUTHDOMAIN,
//   databaseURL: process.envGATSBY_FIREBASEDATABASEURL,
//   projectId: process.envGATSBY_FIREBASEPROJECTID,
//   storageBucket: process.envGATSBY_FIREBASESTORAGEBUCKET,
//   messagingSenderId: process.envGATSBY_FIREBASEMESSAGINGSENDERID,
//   appId: process.envGATSBY_FIREBASEAPPID,
//   measurementId: process.envGATSBY_FIREBASEMEASUREMENTID,
// };

// if (typeof window !== 'undefined') {
//   firebase.initializeApp(config);
// }

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);
// export const signOutWithGoogle = () => auth.signOut();

// export default firebase;
