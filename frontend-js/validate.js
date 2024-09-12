const form = document.getElementById("form");
const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const username = document.getElementById("user-name");
const password = document.getElementById("pass-word");

form.addEventListener("submit", (e) => {
    if (fname) { 
        if (!checkInputs(fname, lname, username, password)) {
            e.preventDefault(); 
        } else {
            e.preventDefault();
            doRegister(); 
        }
    } else if (!checkLogInputs(username, password)) { 
        e.preventDefault(); 
        username.style.border = "1px solid red";
        password.style.border = "1px solid red";
    } else {
        e.preventDefault();
        login(); 
    }
});

function checkInputs(fname, lname, username, password) {
    clearErrorMessages(); 

    let isValid = true;

    if (fname.value === "") {
        showError("first-name-div", "First name cannot be blank");
        isValid = false;
    }
    if (lname.value === "") {
        showError("last-name-div", "Last name cannot be blank");
        isValid = false;
    }
    if (username.value === "") {
        showError("user-name-div", "User name cannot be blank");
        isValid = false;
    }
    if (password.value === "") {
        showError("password-div", "Password cannot be blank");
        isValid = false;
    }

    return isValid;
}


function checkLogInputs(username, password) {
    clearErrorMessages(); 

    let isValid = true;

    if (username.value === "") {
        showError("user-name-div", "User name cannot be blank");
        isValid = false;
    }
    if (password.value === "") {
        showError("password-div", "Password cannot be blank");
        isValid = false;
    }

    return isValid;
}


function showError(divId, message) {
    let error = document.createElement("p");
    error.innerHTML = message;
    error.className = "error-msg";
    document.getElementById(divId).appendChild(error);
}


function clearErrorMessages() {
    document.querySelectorAll(".error-msg").forEach((element) => {
        element.remove();
    });
}


function doRegister() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let username = document.getElementById("user-name").value;
    let password = document.getElementById("pass-word").value;

    if (firstName === "" || lastName === "" || username === "" || password === "") {
        if (firstName === "") {
            document.getElementById("registerFirstNameResult").innerHTML = "Please enter a first name";
        }
        if (lastName === "") {
            document.getElementById("registerLastNameResult").innerHTML = "Please enter a last name";
        }
        if (username === "") {
            document.getElementById("registerUsernameResult").innerHTML = "Please enter a username";
        }
        if (password === "") {
            document.getElementById("registerPasswordResult").innerHTML = "Please enter a password";
        }
    } else {

        document.getElementById("registerFirstNameResult").innerHTML = "";
        document.getElementById("registerLastNameResult").innerHTML = "";
        document.getElementById("registerUsernameResult").innerHTML = "";
        document.getElementById("registerPasswordResult").innerHTML = "";
        document.getElementById("registerResult").innerHTML = "";

        let temp = {
            firstName: firstName,
            lastName: lastName,
            login: username,
            password: password,
        };

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
