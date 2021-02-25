import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAS5ORS6c12Li3DNf2yoguv5m2sLZF7VlU",
    authDomain: "slack-clone-challenge-fd1bb.firebaseapp.com",
    projectId: "slack-clone-challenge-fd1bb",
    storageBucket: "slack-clone-challenge-fd1bb.appspot.com",
    messagingSenderId: "635896924900",
    appId: "1:635896924900:web:92d35eb03ce32996c23af1"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  
  // const firebaseApp=firebase.initializeApp(firebaseConfig);
  // const db=firebase.firestore();

  export default db;