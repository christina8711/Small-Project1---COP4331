const form = document.getElementById("form")
const fname = document.getElementById("first-name")
const lname = document.getElementById("last-name")
const username = document.getElementById("user-name")
const password = document.getElementById("pass-word")

form.addEventListener("submit", (e) => {
    if(fname) {
        if(checkInputs(fname, lname, username, password) === false) {
            e.preventDefault()
        }
    }
    else if(checkLogInputs(username, password) === false){
            e.preventDefault()
            username.style.border = "1px solid red"
            password.style.border = "1px solid red"
    }
    else{
        e.preventDefault();
        login();
    }
})



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


