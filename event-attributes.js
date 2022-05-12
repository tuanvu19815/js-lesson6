function checkUsername() {
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('username');
    if (elUsername.ariaValueMax.length < 5 ) {
        elMsg.testContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}