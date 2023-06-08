import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDropON5tqeWk0ErFaMULMQ5eJk6Nb4E-E",
  authDomain: "chat-app-a3faa.firebaseapp.com",
  projectId: "chat-app-a3faa",
  storageBucket: "chat-app-a3faa.appspot.com",
  messagingSenderId: "1092311983051",
  appId: "1:1092311983051:web:5e2722b8fd346920de8c4e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()



