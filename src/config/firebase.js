import firebase from 'firebase/app';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyD89k7NmQccYy5fEOZHi_SEqyeRBcEZkEc",
    authDomain: "rich-text-editor-7f66f.firebaseapp.com",
    databaseURL: "https://rich-text-editor-7f66f.firebaseio.com",
    projectId: "rich-text-editor-7f66f",
    storageBucket: "rich-text-editor-7f66f.appspot.com",
    messagingSenderId: "331777240701",
    appId: "1:331777240701:web:824124fd2d38d55eae0b14"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();

  export default projectStorage;