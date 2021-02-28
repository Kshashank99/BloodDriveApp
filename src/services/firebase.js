import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyChUWOJG9mM7ZNDssUclTK0U2kQWKFfphM",
    authDomain: "blooddriveapp.firebaseapp.com",
    databaseURL: "http://blooddriveapp-e38ea.firebaseio.com ",
    projectId: "blooddriveapp-e38ea",
    storageBucket: "****",
    messagingSenderId: "900645199759",
    appId: "1:900645199759:android:3b770da300c672c151f5fa",
    // measurementId: "****"
  
};
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore() 

export default firebase;