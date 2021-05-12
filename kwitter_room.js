
var firebaseConfig = {
      apiKey: "AIzaSyBAlryYgjSL7KQCb-yQ4NQ0_8j-b2xG-0w",
      authDomain: "classtest-4a3ff.firebaseapp.com",
      databaseURL: "https://classtest-4a3ff-default-rtdb.firebaseio.com",
      projectId: "classtest-4a3ff",
      storageBucket: "classtest-4a3ff.appspot.com",
      messagingSenderId: "425295527848",
      appId: "1:425295527848:web:98d9ae5101eafa8e70279d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + username + "!";
    
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name" , room_name);

          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name - " + room_name);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)> #" + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("index.html");
}
