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

  let json = JSON.stringify(data);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url + "/Login" + ext, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

  try{
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        userID = response.UserID;
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


register = () => {

	let firstName = document.getElementById("first-name");
	let lastName = document.getElementById("last-name");
	let username = document.getElementById("user-name");
	let password = document.getElementById("pass-word");

	let data = {
		username: username.value,
		password: password.value,
		firstName : firstName.value,
		lastName : lastName.value,
	  };

	let json = JSON.stringify(data);
	let xhr = new XMLHttpRequest();
	xhr.open("POST", url + "/Register" + ext, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

	try{
		xhr.onreadystatechange = () => {
			if (xhr.status == 409) {
				document.getElementById("register-status").innerHTML = "User already exists";
				return;
			}

		  	if (xhr.readyState == 4 && xhr.status == 200) {
				let jsonObject = JSON.parse(xhr.responseText);
				userId = jsonObject.id;
				document.getElementById("register-status").innerHTML = "User added";
				firstName = jsonObject.firstName;
				lastName = jsonObject.lastName;	
				window.location.href = "homepage.html";
				return;
		  	} 
		};
		xhr.send(json);
	  }
		catch (err) {
			document.getElementById("register-status").value = "Error!";
		}
}
