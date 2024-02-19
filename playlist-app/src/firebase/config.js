import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDCefjb4DZvxT9my5iDAjLQH2gpjpVJzPM",
    authDomain: "playlist-vue-39f9a.firebaseapp.com",
    projectId: "playlist-vue-39f9a",
    storageBucket: "playlist-vue-39f9a.appspot.com",
    messagingSenderId: "495603776706",
    appId: "1:495603776706:web:1e4fa6c3c0d2f49f7e0f5b"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
