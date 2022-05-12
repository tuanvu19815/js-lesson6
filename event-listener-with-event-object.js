function checckLength(e, minlength) {
    var el,elMsg;
    if (!e) {
    e = window.event;
    }
    el = r.target || e.srcElement;
    elMsg = el.nextSibling;

    if (el.value.length < minlength) {
        elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
    } else {
        elMsg.innerHTML = '';
    }
}
var elUsername = document.getElementById('username');
if (elUsername.addEventListener) {
    elUsername.addEventListener('blur', function(e) {
        checckLength(e, 5);
    }, false);
} else {
    elUsername.attachEvent('onblur', function(e) {
        checckLength(e, 5);
    });
}