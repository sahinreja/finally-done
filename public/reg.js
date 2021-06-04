function checkForm() {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const cpassword = document.getElementById('confirmpassword')
    document.getElementById('nameErr').innerHTML = "";
    document.getElementById('passErr').innerHTML = "";
    document.getElementById('pass1Err').innerHTML = "";
    document.getElementById('imageErr').innerHTML = "";
    if (name.value.trim() === "") {
        document.getElementById('nameErr').innerHTML = "Name field can not be empty!";
        return false;
    }
    else if (name.value.trim().length < 4) {
        document.getElementById('nameErr').innerHTML = "Name must be 5 characters";
        return false;
    }else if (password.value.trim().length <= 7) {
        document.getElementById('passErr').innerHTML = "Password must be eight Characters!";
        return false;
    }else if(!isValidPass(password.value.trim())){
        document.getElementById('passErr').innerHTML = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
        return false;
    }
    else if(password.value.trim() !== cpassword.value.trim()){
        document.getElementById('pass1Err').innerHTML = "Both password Does not match!"
        return false;
    }
    else if(image.value.trim() === ""){
        document.getElementById('imageErr').innerHTML = "Please choose an image!"
        return false;
    }
    else{
        return true;
    }
}


function isValidPass(pass){
    const re  = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    return re.test(pass)
}