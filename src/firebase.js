import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAaTJc8rBVNOEC7fDbExRPzZid8WylGvBw",
    authDomain: "twitter-clone-421b6.firebaseapp.com",
    databaseURL: "https://twitter-clone-421b6.firebaseio.com",
    projectId: "twitter-clone-421b6",
    storageBucket: "twitter-clone-421b6.appspot.com",
    messagingSenderId: "656175935326",
    appId: "1:656175935326:web:cb75d2223ab09545eca9cf",
    measurementId: "G-C7E8SG5NTX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;