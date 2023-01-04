import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC_8a9rnzc42yG4a1TI67zq1NZ68UCrotw",
  authDomain: "react-native-app-b98dc.firebaseapp.com",
  databaseURL: "https://react-native-app-b98dc-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "react-native-app-b98dc",
  storageBucket: "react-native-app-b98dc.appspot.com",
  messagingSenderId: "541150778186",
  appId: "1:541150778186:web:77c51b320385123c0327b3",
  measurementId: "G-QSDW49FVK9"
};

firebase.initializeApp(firebaseConfig);

export default firebase;