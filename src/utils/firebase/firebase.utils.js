import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC22QfDNnp92deVorPV9RVpT6cGncfiVJs",
  authDomain: "crwn-clothing-db-63032.firebaseapp.com",
  projectId: "crwn-clothing-db-63032",
  storageBucket: "crwn-clothing-db-63032.appspot.com",
  messagingSenderId: "956588136980",
  appId: "1:956588136980:web:f6496587d97b21daeea501",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// this is a function used to store data in firebase database
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);
  //   console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;

  //   if user data exist return userDocRef
  // if data is not exist i want to set the document with the data from userAuth in my collection
};
