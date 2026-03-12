let form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if(username.length < 4){
        message.textContent = "username-ის სიგრძე უნდა იყოს მინიმუმ 4";
        message.className = "error";
        return;
    }

    if(password.length < 6){
        message.textContent = "password-ის სიგრძე უნდა იყოს მინიმუმ 6";
        message.className = "error";
        return;
    }

    message.textContent = "წარმატებით შეხვედით";
    message.className = "success";

});