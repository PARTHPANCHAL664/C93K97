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
//ADD YOUR FIREBASE LINKS
function Adding_user()
{
    user_name = document.getElementById("add_user_prac").value
    firebase.database().ref("/").child(user_name).update({
    purpose : "Adding User" 
     });
}