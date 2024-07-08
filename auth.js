const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const correctUsername = "omar";
const correctPassword = "123456";

function authKey(username, password) {
  if (username === correctUsername && password === correctPassword) {
    console.log("Access granted");
  } else {
    console.log("Access denied");
  }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting
  const username = usernameInput.value;
  const password = passwordInput.value;
  authKey(username, password);
});
