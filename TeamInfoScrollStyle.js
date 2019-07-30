window.addEventListener('load', ApplyStyles(), false);

var infoBoxes = document.getElementsByClassName('TeamMemberInfo');

for (var i = 0; i < infoBoxes.length; i++) {
    infoBoxes[i].onscroll = function() { ApplyStyles() };
    console.log(infoBoxes.length + " // " + i + " // " + infoBoxes[i].innerHTML);
}

function ApplyStyles () {
    
    var topBorder = "0 7px 9px -7px whitesmoke inset";
    var bottomBorder = "0 -7px 9px -7px whitesmoke inset";
    
    var infoBoxes = document.getElementsByClassName('TeamMemberInfo');
    
    for (var j = 0; j < infoBoxes.length; j++) {
        if (infoBoxes[j].scrollHeight != infoBoxes[j].clientHeight) {
            if (infoBoxes[j].scrollTop + 80 >= infoBoxes[j].scrollHeight) {
                infoBoxes[j].style.boxShadow = topBorder;
            }
            else if (infoBoxes[j].scrollTop + 80 < infoBoxes[j].scrollHeight) {
                infoBoxes[j].style.boxShadow = bottomBorder;
            }
            else {
                infoBoxes[j].style.boxShadow = "none"
            }
        }
    }
}

function UpdateStyles (object) {
    
    console.log(object);
    
    var topBorder = "0 7px 9px -7px whitesmoke inset";
    var bottomBorder = "0 -7px 9px -7px whitesmoke inset";
        
    if (object.scrollHeight > object.clientHeight) {
        if (object.scrollHeight === object.scrollTop) {
            object.style.boxShadow = topBorder;
        }
        else if (0 === object.scrollTop) {
            object.style.boxShadow = bottomBorder;
        }
        else {
            object.style.boxShadow = "none";
        }
    } 
}