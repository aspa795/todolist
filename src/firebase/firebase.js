import { initializeApp } from "firebase";
const app = initializeApp({
    apiKey: "AIzaSyCo-diEoMeprKZvtyWoyLyKKhhKcAIJcBw",
    authDomain: "prueba-b9ef2.firebaseapp.com",
    databaseURL: "https://prueba-b9ef2.firebaseio.com",
    projectId: "prueba-b9ef2",
    storageBucket: "prueba-b9ef2.appspot.com",
    messagingSenderId: "467715914026",
    appId: "1:467715914026:web:ffb15fc681163234e08653"
});

export const db = app.database();
