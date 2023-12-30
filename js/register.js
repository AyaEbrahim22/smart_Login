
var inputName = document.getElementById('inputName');

var inputEmail = document.getElementById('inputEmail');

var inputPassword = document.getElementById('inputPassword');

var registerBtn = document.getElementById('registerBtn');

var allInputsRequiredAlert = document.getElementById('allInputsRequiredAlert');

var emailExistsAlert = document.getElementById('emailExistsAlert');

var successAlert = document.getElementById('successAlert');

var validName = document.getElementById('validName');

var validEmail = document.getElementById('validEmail');

var validPassword = document.getElementById('validPassword');



//Array of users
var users = [];

//restore all users in the array
if(localStorage.getItem('users') != null){
    users = JSON.parse(localStorage.getItem('users'));
}


//Hint for user to register his name correct
inputName.addEventListener('input', function(){
    checkValidName();
    allInputsRequiredAlert.classList.add('d-none');
})

//Hint for user to register his email correct
inputEmail.addEventListener('input', function(){
    checkValidEmail();
    allInputsRequiredAlert.classList.add('d-none');
})

//Hint for user to register his password correct
inputPassword.addEventListener('input', function(){
    checkValidPassword();
    allInputsRequiredAlert.classList.add('d-none');
})



registerBtn.addEventListener('click', function () {

    // check empty inputs
    if (inputName.value == '' || inputEmail.value == '' || inputPassword.value == '') {
        allInputsRequiredAlert.classList.remove('d-none');
        emailExistsAlert.classList.add('d-none');
        successAlert.classList.add('d-none');
        validName.classList.add('d-none');
        validEmail.classList.add('d-none');
        validPassword.classList.add('d-none');
    }

    else {

        allInputsRequiredAlert.classList.add('d-none');
        emailExistsAlert.classList.add('d-none');
        successAlert.classList.add('d-none');
        validName.classList.add('d-none');
        validEmail.classList.add('d-none');
        validPassword.classList.add('d-none');

        // check if array is empty
        if (users.length == 0) {
            if( checkValidName() && checkValidEmail() && checkValidPassword() ){
                var user = {
                    name: inputName.value,
                    email: inputEmail.value,
                    password: inputPassword.value
                }
    
                users.push(user);
    
                localStorage.setItem('users', JSON.stringify(users));
    
                console.log(users);
    
                successAlert.classList.remove('d-none');
    
                emailExistsAlert.classList.add('d-none');
    
                validName.classList.add('d-none');
    
                validEmail.classList.add('d-none');
    
                validPassword.classList.add('d-none');
            }
          
        }
        else {
            // check if email already exists
            if (checkEmail()) {
                emailExistsAlert.classList.remove('d-none');
            }
            else {
                if(checkValidName() && checkValidEmail() && checkValidPassword()){
                    var user = {
                        name: inputName.value,
                        email: inputEmail.value,
                        password: inputPassword.value
                    }
    
                    users.push(user);
    
                    localStorage.setItem('users', JSON.stringify(users));
    
                    console.log(users);
    
                    successAlert.classList.remove('d-none');
    
                    emailExistsAlert.classList.add('d-none');
    
                    validName.classList.add('d-none');
    
                    validEmail.classList.add('d-none');
    
                    validPassword.classList.add('d-none');
    
                }
                
            }

        }
    }

})



function checkEmail() {
    for (var i = 0; i < users.length; i++) {
        if (inputEmail.value == users[i].email) {
            return true;
        }
    }
}


function checkValidName(){
    
    var regexName = /^\D{3,10}$/;

    var text = inputName.value;

    if( regexName.test(text) ){
        inputName.classList.add('is-valid');
        inputName.classList.remove('is-invalid');

        validName.classList.add('d-none');
        return true;
    }
    else{
        inputName.classList.add('is-invalid');
        inputName.classList.remove('is-valid');

        validName.classList.remove('d-none');
        return false;
    }

}

function checkValidEmail(){

    var regexEmail = /@/; // A simple validation for email to include @ char

    var text = inputEmail.value;

    if( regexEmail.test(text) ){
        inputEmail.classList.add('is-valid');
        inputEmail.classList.remove('is-invalid');

        validEmail.classList.add('d-none');
        return true;
    }
    else{
        inputEmail.classList.add('is-invalid');
        inputEmail.classList.remove('is-valid');

        validEmail.classList.remove('d-none');
        return false;
    }
}

function checkValidPassword(){
    var regexPassword = /^\w{4,6}$/;

    var text = inputPassword.value;

    if( regexPassword.test(text) ){
        inputPassword.classList.add('is-valid');
        inputPassword.classList.remove('is-invalid');

        validPassword.classList.add('d-none');
        return true;
    }
    else{
        inputPassword.classList.add('is-invalid');
        inputPassword.classList.remove('is-valid');

        validPassword.classList.remove('d-none');
        return false;
    }
}

