const firebaseConfig = {
    apiKey: "AIzaSyDX6uXZUUd1Rys_finsB1B57VIq61YxzZk",
    authDomain: "kwitter-64158.firebaseapp.com",
    databaseURL: "https://kwitter-64158-default-rtdb.firebaseio.com",
    projectId: "kwitter-64158",
    storageBucket: "kwitter-64158.appspot.com",
    messagingSenderId: "1081712949517",
    appId: "1:1081712949517:web:01924c3eee7cf67d295844"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
