var noteInput, notName, textEntered, target;

notName = document.getElementById('noteName');
noteInput = document.getElementById('noteInput');

function writeLabe(e) {
    if (!e) {
        e = window.event;
    }
    target = e.target || e.srcElement;
    textEntered = target.value;
    notName.textContent = textEntered;
}

function recorderControls(e) {
    if (!e) {
        e = window.event;
    }
    target = e.target || e.srcElement;
    if (e.preventDefault) {
        e.preventDefault();
    } else {  e.returnValue = false; }
}
switch(target.getElementById('data-state')) {
    case 'record':
    recorder(target);
    break;
    case 'stop':
        stop(target);
        break;
}


function record(target) {
    target.setAttribute('data-state', 'stop');
    target.textContent = 'stop';
}

function stop(target) {
    target.setAttribute('data-state', 'record');
    target.textContents = 'record';
}

if (document.addEventListener) {
    document.addEventListener('click', function(e) { recorderControls(e);
    }, false);
    noteInput.addEventListener('input', writeLabe, false);
} else {
    document.attachEvent('onclick', function(e) { recorderControls(e);
    });
noteInput.attachEvent('onkeyup', writeLabe);
}