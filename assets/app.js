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
const database = firebase.database();

// DECLARATION START (variables, functions, etc.) ---------------------
var trainName = "";
var destination = "";
var startTime = "";
var frequency = 0;

// LOCAL TIME FUNCTION
function currentTime() {
  var current = moment().format('LT');
  $("#currentTime").html(current);
  setTimeout(currentTime, 1000);
};

// FORM FUNCTION
$(".form-field").on("keyup", function() {
  var traintemp = $("#train-name").val().trim();
  var citytemp = $("#destination").val().trim();
  var timetemp = $("#first-train").val().trim();
  var freqtemp = $("#frequency").val().trim();

  sessionStorage.setItem("train", traintemp);
  sessionStorage.setItem("city", citytemp);
  sessionStorage.setItem("time", timetemp);
  sessionStorage.setItem("freq", freqtemp);
});

$("#train-name").val(sessionStorage.getItem("train"));
$("#destination").val(sessionStorage.getItem("city"));
$("#first-train").val(sessionStorage.getItem("time"));
$("#frequency").val(sessionStorage.getItem("freq"));