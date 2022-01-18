
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("#submit");
const p = document.querySelector("#welcome")

 const formObj = {
    username: "",
    email: "",
    password: ""
};


username.addEventListener("input", (e) => {
    formObj.username = e.target.value;
})

email.addEventListener("input", (e) => {
    formObj.email = e.target.value;
})

password.addEventListener("input", (e) => {
    formObj.password = e.target.value;
})

btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (!formObj.username) {
        alert("username cannot be empty")
    }

    else if (!formObj.email) {
        alert("email cannot be empty")
    }

    else if (!formObj.password) {
        alert("username cannot be empty")
    }

    else {
        p.innerHTML = `Welcome <b>${formObj.username}</b>, an email has been sent to <b>${formObj.email}</b> for verification`;
    }
})



