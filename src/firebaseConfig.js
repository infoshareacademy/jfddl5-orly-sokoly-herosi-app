import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAmTXsrM_GQyySgxE9qfhdqmcgx3XF_TzY",
    authDomain: "survey-app-84f53.firebaseapp.com",
    databaseURL: "https://survey-app-84f53.firebaseio.com",
    projectId: "survey-app-84f53",
    storageBucket: "survey-app-84f53.appspot.com",
    messagingSenderId: "635698436786"
  };
  
 const firebaseApp = firebase.initializeApp(config);


export const database = firebase.database()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider