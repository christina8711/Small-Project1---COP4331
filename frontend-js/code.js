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

function doRegister()
{
	firstName = document.getElementById("firstName").value;
	lastName = document.getElementById("lastName").value;

	let username = document.getElementById("registerUser").value;
	let password = document.getElementById("registerPassword").value;

	if(firstName == "" | lastName == "" | username == "" | password == "")
	{
		if(firstName == "")
		{
			document.getElementById("registerFirstNameResult").innerHTML = "Please enter a first name";
		}
		if(lastName == "")
		{
			document.getElementById("registerLastNameResult").innerHTML = "Please enter a last name";
		}
		if(username == "")
		{
			document.getElementById("registerUsernameResult").innerHTML = "Please enter a username";
		}
		if(password == "")
		{
			document.getElementById("registerPasswordResult").innerHTML = "Please enter a password";
		}
		
	}
	else
	{
		document.getElementById("registerFirstNameResult").innerHTML = "";
		document.getElementById("registerLastNameResult").innerHTML = "";
		document.getElementById("registerUsernameResult").innerHTML="";
		document.getElementById("registerPasswordResult").innerHTML="";
		document.getElementById("registerResult").innerHTML = "";

		let temp = {firstName: firstName, lastName : lastName, login: username, password : password};

		let jsonPayload = JSON.stringify(temp);

		let url = urlBase + '/Register.' + extension;

		let xhr = new XMLHttpRequest();
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
		
		try {
			xhr.onreadystatechange = function () {

				if (this.readyState != 4) {
					return;
				}

				if (this.status == 409) {
					document.getElementById("registerResult").innerHTML = "User already exists";
					return;
				}

				if (this.status == 200) {

					let jsonObject = JSON.parse(xhr.responseText);
					userId = jsonObject.id;
					document.getElementById("registerResult").innerHTML = "User added";
					firstName = jsonObject.firstName;
					lastName = jsonObject.lastName;
					saveCookie();


				}
			};

			xhr.send(jsonPayload);
		} catch (err) {
			document.getElementById("registerResult").innerHTML = err.message;
		}
	}
}



