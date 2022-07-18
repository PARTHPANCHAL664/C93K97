var firebaseConfig = {
      apiKey: "AIzaSyCiLpUuWYtVx9K_1N9EsrnM5cWxyrh2hXE",
      authDomain: "kwitter-89d3d.firebaseapp.com",
      databaseURL: "https://kwitter-89d3d-default-rtdb.firebaseio.com",
      projectId: "kwitter-89d3d",
      storageBucket: "kwitter-89d3d.appspot.com",
      messagingSenderId: "800351117979",
      appId: "1:800351117979:web:ed7537566f92e8290e5c3e"
};
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome😊" + user_name + "!";

function add_room() 
{
    room_name = document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
    purpose : "Adding User Room" 
     });

  localStorage.setItem("room_name", room_name);

  window.location = "Kwitter_room.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;


                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class= 'room_name' id ="+Room_names+" onclick= 'redirectToRoomName(this.id)' ># "+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
function redirectToRoomName(Name)
{
      console.log(Name)
      localStorage.setItem("room_name", Name)
      window.location = "Kwitter_page.html";
}
getData();

function log_out()
{
      localStorage.removeItem("Room_Names");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}