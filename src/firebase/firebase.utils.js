import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAcZOoee9mFlgnQL4dgTLIyDwMf5UTbkG4",
  authDomain: "crwn-db-d9dd5.firebaseapp.com",
  databaseURL: "https://crwn-db-d9dd5.firebaseio.com",
  projectId: "crwn-db-d9dd5",
  storageBucket: "",
  messagingSenderId: "634928860448",
  appId: "1:634928860448:web:f2de7802052d700b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
