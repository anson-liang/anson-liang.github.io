function detectmob() {
//    alert('pass');
    if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            ) {
        return true;
    }
    else {
        return false;
    }
}

if (detectmob()) {
    window.location = 'http://yiyanliang.github.io/m/';
} else {
//    window.location = 'http://anson.gweb.io';
}
