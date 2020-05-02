import { initializeApp } from "firebase";
const app = initializeApp({
  apiKey: "AIzaSyBv5yzDKvSVU9PZQgLSQGv0R7Ek7aADuK0",
  authDomain: "webinar-51ab9.firebaseapp.com",
  databaseURL: "https://webinar-51ab9.firebaseio.com",
  projectId: "webinar-51ab9",
  storageBucket: "webinar-51ab9.appspot.com",
  messagingSenderId: "260860639359",
  appId: "1:260860639359:web:89ba9066c411b7f709e74a",
});

export const db = app.database();
