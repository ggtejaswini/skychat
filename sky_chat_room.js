// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADIzTE4qg9hS8E962bWuqwnZn7erphlLk",
    authDomain: "sky-chat-86ca2.firebaseapp.com",
    databaseURL: "https://sky-chat-86ca2-default-rtdb.firebaseio.com",
    projectId: "sky-chat-86ca2",
    storageBucket: "sky-chat-86ca2.appspot.com",
    messagingSenderId: "310795112575",
    appId: "1:310795112575:web:acdbac33297d707b02ef4a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function add_room(){
    room_name = document.getElementById("room_name").value ;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding new room"
    });
    localStorage.setItem("room_name",room_name);
    window.location="sky_chat_page.html"; 
}


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='rederect(this.id)'>#"+Room_names+"</div> <hr>";  
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function rederect(name){
    localStorage.setItem("room_name",name);
    window.location="sky_chat_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}