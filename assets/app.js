// Train Scheduler by Johnny Maravelis

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAP6t_6HzwJG0hCKqLhBnkm0J-YsXxgWz8",
    authDomain: "train-scheduler-4ac1e.firebaseapp.com",
    databaseURL: "https://train-scheduler-4ac1e.firebaseio.com",
    projectId: "train-scheduler-4ac1e",
    storageBucket: "train-scheduler-4ac1e.appspot.com",
    messagingSenderId: "332023991751",
    appId: "1:332023991751:web:004e3e12e0547516"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database
var database = firebase.database();