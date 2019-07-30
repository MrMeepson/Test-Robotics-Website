window.addEventListener('load', ApplyStyles(), false);

var infoBoxes = document.getElementsByClassName('TeamMemberInfo');

for (var i = 0; i < infoBoxes.length; i++) {
    infoBoxes[i].onscroll = function() { ApplyStyles() };
}

function ApplyStyles () {
    
    var topBorder = "0 7px 9px -7px whitesmoke inset";
    var bottomBorder = "0 -7px 9px -7px whitesmoke inset";
    
    var infoBoxes = document.getElementsByClassName('TeamMemberInfo');
    
    var emSize = parseFloat(getComputedStyle(infoBoxes[0]).fontSize);
    var paddingSize = emSize * 5.5;
    
    for (var j = 0; j < infoBoxes.length; j++) {
        if (infoBoxes[j].scrollHeight != infoBoxes[j].clientHeight) {
            if (infoBoxes[j].scrollTop + paddingSize >= infoBoxes[j].scrollHeight) {
                infoBoxes[j].style.boxShadow = topBorder;
            }
            else if (infoBoxes[j].scrollTop + paddingSize < infoBoxes[j].scrollHeight) {
                infoBoxes[j].style.boxShadow = bottomBorder;
            }
            else {
                infoBoxes[j].style.boxShadow = "none"
            }
        }
    }
}