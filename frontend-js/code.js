let url = "http://localhost/COP4331/API";
let ext = ".php";








login = () => {
  let username = document.getElementById("user-name");
  let password = document.getElementById("pass-word");
  let data = {
    username: username.value,
    password: password.value,
  };

  let json = JSON.stringify(data);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url + "/Login" + ext, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

  try{
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        userID = response.user_id;
        if ( userID >= 1) {
          document.getElementById("login-status").value = "Success!";
          window.location.href = "homepage.html";
          return;
        } 
        else{
          document.getElementById("login-status").innerHTML = "Failed!";
        }

      }
    };
    xhr.send(json);
  }
    catch (err) {
        document.getElementById("login-status").value = "Error!";
    }
};



