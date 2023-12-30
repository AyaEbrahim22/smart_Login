
var inputEmail = document.getElementById('inputEmail');

var inputPassword = document.getElementById('inputPassword');

var allInputsRequiredAlert = document.getElementById('allInputsRequiredAlert');

var incorrectAlert = document.getElementById('incorrectAlert');

var loginBtn = document.getElementById('loginBtn');

var users = [];

if (localStorage.getItem('users') != null) {
    users = JSON.parse(localStorage.getItem('users'));
}

var userName = '';

loginBtn.addEventListener('click', function () {

    if (inputEmail.value == '' || inputPassword.value == '') {
        allInputsRequiredAlert.classList.remove('d-none');
        incorrectAlert.classList.add('d-none')
    }

    else {

        if (users.length == 0) {
            incorrectAlert.classList.remove('d-none');
            allInputsRequiredAlert.classList.add('d-none');
        }
        else {

            allInputsRequiredAlert.classList.add('d-none');
            incorrectAlert.classList.add('d-none')

            if (checkEmailAndPassword()) {
                window.location = './home.html';

                localStorage.setItem('userName', userName);
            }
            else {
                incorrectAlert.classList.remove('d-none');
            }
        }

    }

})

function checkEmailAndPassword() {
    for (var i = 0; i < users.length; i++) {

        if (inputEmail.value == users[i].email && inputPassword.value == users[i].password) {
            userName = users[i].name;
        }
    }

    if(userName.length > 0){
        return true;
    }
}
