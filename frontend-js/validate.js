const form = document.getElementById("form")
const fname = document.getElementById("first-name")
const lname = document.getElementById("last-name")
const username = document.getElementById("user-name")
const password = document.getElementById("pass-word")

let contactName = document.getElementById("inputName");
let phonenum = document.getElementById("inputPhoneNumber");
let organization = document.getElementById("inputOrganization");
let country = document.getElementById("inputCountry");
let emailaddress = document.getElementById("inputEmail");

form.addEventListener("submit", (e) => {
    // checks for registration
    if(fname) {
        if(checkInputs(fname, lname, username, password) === false) {
            e.preventDefault()
        }
        else {
            e.preventDefault();
            register();
        }
    }
    else if(checkLogInputs(username, password) === false){
            e.preventDefault()
            username.style.border = "1px solid red"
            password.style.border = "1px solid red"
    }
    // checks to see if a contact is being added
    else if(phonenum) { 
        if (checkContactInputs(contactName, phonenum, organization, country, emailaddress) == false) { 
            e.preventDefault()
        }
        else {
            e.preventDefault();
            addContact();
        }
    }
    // checks for log in 
    else{
        e.preventDefault();
        login();
    }
})

checkContactInputs = (contactName, phonenum, organization, country, emailaddress) => { 
    document.querySelectorAll(".error-msg").forEach((element) => {
        element.remove()
    })
    let flag = true 
    if(contactName.value === "") {
        let nameError = document.createElement("p")
        nameError.innerHTML = "Name cannot be blank"
        nameError.className = "error-msg"
        document.getElementById("contact-name-div").appendChild(nameError)
        flag = false
    }
    if(phonenum.value === "") {
        let phoneError = document.createElement("p")
        phoneError.innerHTML = "Phone number cannot be blank"
        phoneError.className = "error-msg"
        document.getElementById("phone-num-div").appendChild(phoneError)
        flag = false
    }
    if(email.value === "") {
        let emailError = document.createElement("p")
        emailError.innerHTML = "Email cannot be blank"
        emailError.className = "error-msg"
        document.getElementById("email-div").appendChild(emailError)
        flag = false
    }
    return flag
}


checkInputs = (fname, lname, username, password) => {
    document.querySelectorAll(".error-msg").forEach((element) => {
        element.remove()
    })

    let flag = true
    if(fname.value === "") {
        let fnameError = document.createElement("p")
        fnameError.innerHTML = "First name cannot be blank"
        fnameError.className = "error-msg"
        document.getElementById("first-name-div").appendChild(fnameError)
        flag = false
    }
    if(lname.value === "") {
        let lnameError = document.createElement("p")
        lnameError.innerHTML = "Last name cannot be blank"
        lnameError.className = "error-msg"
        document.getElementById("last-name-div").appendChild(lnameError)
        flag = false
    }
    if(username.value === "") {
        let userError = document.createElement("p")
        userError.innerHTML = "User name cannot be blank"
        userError.className = "error-msg"
        document.getElementById("user-name-div").appendChild(userError)
        flag = false
    }
    if(password.value === "") {
        let passError = document.createElement("p")
        passError.innerHTML = "password cannot be blank"
        passError.className = "error-msg"
        document.getElementById("password-div").appendChild(passError)
        flag = false
    }
    return flag
}


checkLogInputs = (username, password) => {
    document.querySelectorAll(".error-msg").forEach((element) => {
        element.remove()
    })

    let flag = true
    if(username.value === "") {
        let userError = document.createElement("p")
        userError.innerHTML = "User name cannot be blank"
        userError.className = "error-msg"
        document.getElementById("user-name-div").appendChild(userError)
        flag = false
    }
    if(password.value === "") {
        let passError = document.createElement("p")
        passError.innerHTML = "password cannot be blank"
        passError.className = "error-msg"
        document.getElementById("password-div").appendChild(passError)
        flag = false
    }
    return flag
}


