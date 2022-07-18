function log_user()
{
    user_name = document.getElementById("User_Name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "Kwitter_room.html"
}

