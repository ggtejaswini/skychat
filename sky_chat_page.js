const firebaseConfig = {
    apiKey: "AIzaSyADIzTE4qg9hS8E962bWuqwnZn7erphlLk",
    authDomain: "sky-chat-86ca2.firebaseapp.com",
    databaseURL: "https://sky-chat-86ca2-default-rtdb.firebaseio.com",
    projectId: "sky-chat-86ca2",
    storageBucket: "sky-chat-86ca2.appspot.com",
    messagingSenderId: "310795112575",
    appId: "1:310795112575:web:acdbac33297d707b02ef4a"
  };
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}