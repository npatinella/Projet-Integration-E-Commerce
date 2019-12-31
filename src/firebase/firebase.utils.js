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
export const createUserProfileDocument = async(userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot){
        const{ displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creation user', error.message);
        }
    }
    return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
/*
const providerFacebook = new firebase.auth.FacebookAuthProvider();
providerFacebook.setCustomParameters({prompt:'select_account'});
export const signInWithFacebook = () => auth.signInWithPopup(providerFacebook)
*/
export default firebase;