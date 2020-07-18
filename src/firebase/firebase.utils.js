import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBjKyIptSZy5AXD2UPnzQkgycTk0lVd1uM",
    authDomain: "crwn-db-98b80.firebaseapp.com",
    databaseURL: "https://crwn-db-98b80.firebaseio.com",
    projectId: "crwn-db-98b80",
    storageBucket: "crwn-db-98b80.appspot.com",
    messagingSenderId: "580837371154",
    appId: "1:580837371154:web:366ca1c327924cd59917cb",
    measurementId: "G-HRWTBPZHYP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
