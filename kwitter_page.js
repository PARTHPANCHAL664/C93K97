//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['name'];
like = message_data['like'];
msg = message_data['msg']
name_with_tag = "<h4>"+ Name + "<img class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4>" + msg + "</h4>";
like_button = "<button class='btn btn-warning id="+ firebase_message_id + " value=" +like+ " onclick=updateLike(this.id)>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      like = document.getElementById(button_id).value;
      updated_like = Number(like) + 1;
      console.log(updated_like);
      firebase.database().ref(room_name).child(message_id).update ({
            like : updated_like
      })
}

var room_name = localStorage.getItem("room_name");
var user_name = localStorage.getItem("user_name");

function send_user_text()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push ({
       
            name:user_name,
            like:0,
            message:msg
      })
      document.getElementById("msg").value = ""
}

function log_user_out()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");

      window.location = "index.html";
}
