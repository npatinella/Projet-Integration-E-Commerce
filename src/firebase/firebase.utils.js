import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyBt_DxdPVRgyU24c1LLBVAOlzN6KrV-2rM",
    authDomain: "crwn-db-da5f1.firebaseapp.com",
    databaseURL: "https://crwn-db-da5f1.firebaseio.com",
    projectId: "crwn-db-da5f1",
    storageBucket: "crwn-db-da5f1.appspot.com",
    messagingSenderId: "151435086778",
    appId: "1:151435086778:web:dbb654cdafa004d176eb83",
    measurementId: "G-241J61CS55"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const providerFacebook = new firebase.auth.FacebookAuthProvider();
providerFacebook.setCustomParameters({prompt:'select_account'});
export const signInWithFacebook = () => auth.signInWithPopup(providerFacebook)

export default firebase;