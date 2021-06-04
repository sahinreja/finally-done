function checkLoginForm(){
    const email = document.getElementById('email');
    const password = document.getElementById("password");
    document.getElementById('email').innerHTML = "";
    if(email.value.trim() === ""){
        document.getElementById("emailErr").innerHTML = "Email Filed can not be empty!"
        return false;
    }
    else if(password.value.trim().length <= 7){
        document.getElementById("passErr").innerHTML = "Password lenght must be 8 characters!";
        return false;
    }else{
        return true;
    }
}