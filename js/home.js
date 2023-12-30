



var getUserName = document.getElementById('getUserName');

getUserName.innerHTML = 'Welcome ' + localStorage.getItem('userName');



var logOutBtn = document.getElementById('logOutBtn');

logOutBtn.addEventListener('click', function(){
    window.location = './index.html';
})



