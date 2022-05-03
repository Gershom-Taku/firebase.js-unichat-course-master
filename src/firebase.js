import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeAPP({
    apiKey: "AIzaSyC7KAjsGkkl1gyyyOxAnI24ZGHEH7J_U-c",
    authDomain: "audi-chat.firebaseapp.com",
    projectId: "audi-chat",
    storageBucket: "audi-chat.appspot.com",
    messagingSenderId: "975074092803",
    appId: "1:975074092803:web:90d9a44477af058d6dab36"
  }).auth();