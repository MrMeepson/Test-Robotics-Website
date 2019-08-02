window.addEventListener('load', applyStyles(), false);

var infoBoxes = document.getElementsByClassName('TeamMemberInfo');

for (var i = 0; i < infoBoxes.length; i++) {
    infoBoxes[i].onscroll = function() { applyStyles() };
}

function applyStyles () {
    var infoBoxes = document.getElementsByClassName('TeamMemberInfo');
    
    var topBorder = "0 14px 14px -14px whitesmoke inset";
    var bottomBorder = "0 -14px 14px -14px whitesmoke inset";
    
    var emSize = parseFloat(getComputedStyle(infoBoxes[0]).fontSize);
    var paddingSize = emSize * 5.5;
    
    for (var j = 0; j < infoBoxes.length; j++) {
        if (infoBoxes[j].scrollHeight != infoBoxes[j].clientHeight) {
            if (infoBoxes[j].scrollHeight > infoBoxes[j].scrollTop + paddingSize) {
                infoBoxes[j].style.boxShadow = bottomBorder;
            }
            else {
                infoBoxes[j].style.boxShadow = "none";
            }
        }
    }
}