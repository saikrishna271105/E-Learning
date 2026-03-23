function validateRegister() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (name === "" || email === "" || password === "" || confirm === "") {
        alert("All fields required");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    if (password !== confirm) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}

function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("All fields required");
        return false;
    }

    return true;
}