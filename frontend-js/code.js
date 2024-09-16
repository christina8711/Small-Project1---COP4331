let url = "http://mitskiucf.xyz/API";
let ext = ".php";

let userId = -1;
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
        userId = response.UserID;
        console.log("Login successful, UserID:", userId); // Log UserID

        if (userId >= 1) {
          firstName = response.FirstName;
          lastName = response.LastName;
          saveCookie();
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

saveCookie = () => {
  let minutes = 20;
  let date = new Date();
  date.setTime(date.getTime() + minutes * 60 * 1000);
  document.cookie =
    "firstName=" +
    firstName +
    ",lastName=" +
    lastName +
    ",userID=" +
    userId +
    ";expires=" +
    date.toGMTString();
};

readCookie = () => {
  let data = document.cookie;
  let splits = data.split(",");
  for (let i = 0; i < splits.length; i++) {
    let temp = splits[i].trim();
    let pair = temp.split("=");
    if (pair[0] == "firstName") {
      firstName = pair[1];
    } else if (pair[0] == "lastName") {
      lastName = pair[1];
    } else if (pair[0] == "userID") {
      userId = parseInt(pair[1].trim());
    }
  }
  console.log("Cookie data:", firstName, lastName, userId);

  if (userId < 1) {
    window.location.href = "index.html";
  }
};

Logout = () => {
  userId = 0;
  firstName = "";
  lastName = "";
  contacts = [];
  document.cookie =
    "firstName=" +
    firstName +
    ",lastName=" +
    lastName +
    ",userID=" +
    userId +
    ";expires=" +
    "Thu, 01 Jan 1970 00:00:00 GMT";
  window.location.href = "index.html";
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
          window.location.href = "homepage.html";
        } else if (xhr.status == 409) {
          console.log("User already exists"); // Log if user already exists
        } else {
          console.log("Registration error:", xhr.responseText); // Log any error responses
        }
      }
    };
    xhr.send(json);
  } catch (err) {
    console.log("Registration error:", err); // Log any errors
    document.getElementById("register-status").innerHTML = err.message;
  }
};

if (document.title == "homepage") {
  console.log("Homepage loaded");
  readCookie();
  document.addEventListener("DOMContentLoaded", () => {
    displayContacts();
  });
}

function addContact() {
  let contactName = document.getElementById("inputName");
  let phonenum = document.getElementById("inputPhoneNumber");
  let organization = document.getElementById("inputOrganization");
  let country = document.getElementById("inputCountry");
  let emailaddress = document.getElementById("inputEmail");

  let data = {
    contactName: contactName.value,
    phonenum: phonenum.value,
    organization: organization.value,
    country: country.value,
    emailaddress: emailaddress.value,
  };

  let json = JSON.stringify(data);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url + "/AddContacts" + ext, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

  try {
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contact-add-status").innerHTML =
          "Contact has been added";
      }
    };
    xhr.send(json);
  } catch (err) {
    document.getElementById("contact-add-status").innerHTML = err.message;
  }
}

displayContacts = () => {
  console.log("data is ", userId);
  let data = {
    userID: userId,
  };
  let json = JSON.stringify(data);
  let xhr = new XMLHttpRequest();

  xhr.open("POST", url + "/ListContacts" + ext, true);

  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        try {
          console.log("Response:", xhr.responseText);
          let response = JSON.parse(xhr.responseText);

          if (response.hasOwnProperty("error")) {
            displayNoContactsFound();
          } else {
            let contacts = response.results;
            let cards = "";
            let slides = 0;
            console.log("Contacts:", contacts);
            let cardCarousel = document.getElementById("carousel-inner");

            if (contacts.length === 0) {
              displayNoContactsFound();
            } else {
              for (let i = 0; i < contacts.length; i++) {
                let contact = contacts[i];
                let cardClass = `phone-card-${(i % 3) + 1}`;
                if (i % 3 == 0) {
                  if (slides !== 0) {
                    cards += `</div></div>`;
                  }
                  cards += `<div class="carousel-item ${
                    slides === 0 ? "active" : ""
                  }"><div class="cards-wrapper">`;
                  slides++;
                }
                cards += `
                  <div class="card ${cardClass} card-hover">
                    <div class="card-body details-body">
                      <h5 class="card-title"><b> Name:</b> ${contact.Name}</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary">
                        <b> Organization:</b> ${contact.Organization}
                      </h6>
                      <h6 class="card-subtitle mb-2 text-body-secondary">
                        <b> Country: </b> ${contact.Country}
                      </h6>
                      <p class="card-text">
                        <b> Email:</b> ${contact.Email}
                      </p>
                      <p class="card-text">
                        <b> Phone Number:</b> ${contact.Phone}
                      </p>
                    </div>
                  </div>
                `;
              }
              cardCarousel.innerHTML = cards;
            }
          }
        } catch (error) {
          console.error("Error parsing response:", error);
        }
      } else {
        console.error(`Request failed. Status: ${xhr.status}`);
      }
    }
  };

  try {
    xhr.send(json);
  } catch (err) {
    console.error("Error sending request:", err);
  }
};

function displayNoContactsFound() {
  let cardCarousel = document.getElementById("carousel-inner");
  cardCarousel.innerHTML = `
                  <div class="card phone-card-2 card-hover">
                    <div class="card-body details-body">
                      <h5 class="card-title"><b>Contacts are displayed here!</b></h5>
                      <p></p>
                      <div class="textmoji"><cat-emoji class="textmoji"></cat-emoji></div>
                      <p></p>
                      <h5 class="card-title"><b><- Start adding your contacts in the manage page</b></h5>
                    </div>
                  </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", Logout);
  }
});

if (document.title == "Manage Page") {
  console.log("Manage Page Loaded");
  readCookie();
}
