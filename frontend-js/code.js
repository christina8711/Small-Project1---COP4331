let url = "http://mitskiucf.xyz/API";
let ext = ".php";

let userId = 0;
let firstName = "";
let lastName = "";
let contacts = [];
let pageNumber = 1;

login = () => {
  let username = document.getElementById("user-name");
  let password = document.getElementById("pass-word");
  let data = {
    username: username.value,
    password: password.value,
  };

  console.log("Login data:", data); // Log the data being sent

  let json = JSON.stringify(data);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url + "/Login" + ext, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

  try {
    xhr.onreadystatechange = () => {
      console.log("XHR state:", xhr.readyState, "Status:", xhr.status); // Log XHR state and status
      if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        userID = response.UserID;
        console.log("Login successful, UserID:", userID); // Log UserID

        if (userID >= 1) {
          document.getElementById("login-status").value = "Success!";
          window.location.href = "homepage.html";
          return;
        } else {
          document.getElementById("login-status").innerHTML = "Failed!";
        }
      }
    };
    xhr.send(json);
  } catch (err) {
    console.log("Login error:", err); // Log any errors
    document.getElementById("login-status").value = "Error!";
  }
};

register = () => {
  let firstname = document.getElementById("first-name");
  let lastname = document.getElementById("last-name");
  let username = document.getElementById("user-name");
  let password = document.getElementById("pass-word");

  let data = {
    username: username.value,
    password: password.value,
    firstname: firstname.value,
    lastname: lastname.value,
  };

  console.log("Registration data:", data); // Log the registration data being sent

  let json = JSON.stringify(data);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url + "/Register" + ext, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

  try {
    xhr.onreadystatechange = () => {
      console.log("XHR state:", xhr.readyState, "Status:", xhr.status); // Log XHR state and status

      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          let jsonObject = JSON.parse(xhr.responseText);
          userId = jsonObject.id;
          console.log("User registered successfully, UserID:", userId); // Log UserID
          document.getElementById("register-status").innerHTML = "User added";
          window.location.href = "homepage.html";
        } else if (xhr.status == 409) {
          console.log("User already exists"); // Log if user already exists
          document.getElementById("register-status").innerHTML = "User already exists";
        } else {
          console.log("Registration error:", xhr.responseText); // Log any error responses
          document.getElementById("register-status").innerHTML = "Error occurred during registration";
        }
      }
    };
    xhr.send(json);
  } catch (err) {
    console.log("Registration error:", err); // Log any errors
    document.getElementById("register-status").innerHTML = err.message;
  }
};
