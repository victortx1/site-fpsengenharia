import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBULbDuq0xMKHliS-3eZkQymynFnujKZ44",
  authDomain: "fpsengenharia-site.firebaseapp.com",
  projectId: "fpsengenharia-site",
  storageBucket: "fpsengenharia-site.firebasestorage.app",
  messagingSenderId: "850233816016",
  appId: "1:850233816016:web:09b83b6146968f51523fd5"
};

const app = initializeApp(firebaseConfig);

export { app };