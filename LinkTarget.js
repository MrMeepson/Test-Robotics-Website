window.addEventListener('load', LinkTarget(), false);

function LinkTarget() {
    "use strict";

    //define tags and sitename
    var aTags = document.getElementsByTagName("a");
    var sitename = window.location.hostname;

    //replace target property of links to external sites
    for (var i = 0; i < aTags.length; i++) {
        if (extractHostname(aTags[i].href) != sitename) {
            aTags[i].target = '_blank';
        }
    }
}

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}