let url = "http://localhost/COP4331/API";
let ext = ".php";



document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission
        login(); // Call the login function
    });
});




login = () => {
  let username = document.getElementById("user-name");
  let password = document.getElementById("pass-word");
  let data = {
    username: username.value,
    password: password.value,
  };

  let json = JSON.stringify(data);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url + "/login" + ext, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

  try{
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        userID = response.userID;
        if ( userID < 1) {
          document.getElementById("login-status").value = "Failed!";
          return;
        } 

        firstName = response.firstName;
        lastName = response.lastName;

        window.location.href = "homepage.html";
      }
    };
    xhr.send(json);
  }
    catch (err) {
        document.getElementById("login-status").value = "Error!";
    }
};

document.getElementById("login-button").addEventListener("click", login);

