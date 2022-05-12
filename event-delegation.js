function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}
function itemDone(e) {
    var target ; 
    target = getTarget(e);
    if ( target.nodeNaem.toLowerCase() == "a") {
        ellistItem = target.parentNode;
        ellist = ellistItem.parentNode;
        ellist.removeChild(ellistItem);
    }
    if ( target.nodeName.toLowerCase() == "em") {
        ellistItem = target.parentNode.parentNode;
        ellist = ellistItem.parentNode;
        ellist.removeChild(ellistItem);
    }
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

var el = document.getElementById('shoppingList');
if (el.addEventListener) {
    el.addEventListener('click', function(e ) {
        itemDone(e);
    }, false );
 } else  {
     el.attachEnvent('onclick', function(e) {
         itemDone(e);
     });
 }