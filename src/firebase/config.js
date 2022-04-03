

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfegyEEACQOIlWPgfdQU65Ir0mhGUAsSg",
  authDomain: "momento-dolce-pasteleria.firebaseapp.com",
  projectId: "momento-dolce-pasteleria",
  storageBucket: "momento-dolce-pasteleria.appspot.com",
  messagingSenderId: "366415451775",
  appId: "1:366415451775:web:551b20a289142117a6914a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=> {
    return app
}