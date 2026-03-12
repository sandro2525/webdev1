const database = [
  { username: "alice", password: "alice123" },
  { username: "bob", password: "bob123" },
  { username: "charlie", password: "charlie123" }
];

function LogIn(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  errorMessage.textContent = "";
  if (username == "") {
    errorMessage.textContent = "Username cannot be empty";
    return;
  }

  if (password == "") {
    errorMessage.textContent = "Password cannot be empty";
    return;
  }
  const user = database.find(function(e){
    return e.username === username && e.password === password;
  });

  if (user) {
    alert("Login successful");
  } else {
    errorMessage.textContent = "Incorrect username or password";
  }
}
