import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDz32-sSEKwpuyJzz5KU30qNDeGcaTBPCw",
    authDomain: "clinicaprueba-32f2e.firebaseapp.com",
    databaseURL: "https://clinicaprueba-32f2e.firebaseio.com",
    projectId: "clinicaprueba-32f2e",
    storageBucket: "clinicaprueba-32f2e.appspot.com",
    messagingSenderId: "760203058023",
    appId: "1:760203058023:web:2484aa17c332d68d206dc2"
}

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default config;
