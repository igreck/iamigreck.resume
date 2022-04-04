import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./components/interface/ThemeContext";
import Background from "./components/interface/Background";
import Toggle from "./components/interface/ThemeToggle";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCA5en1x7zP11dt-6Q-ArUj4scVAS62pnE",
//   authDomain: "iamigreck.firebaseapp.com",
//   databaseURL: "https://iamigreck-default-rtdb.firebaseio.com",
//   projectId: "iamigreck",
//   storageBucket: "iamigreck.appspot.com",
//   messagingSenderId: "935509176479",
//   appId: "1:935509176479:web:aef02c2a52ced8baaf32aa",
//   measurementId: "G-YETJTHP09L",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
          <Toggle />
        </div>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
