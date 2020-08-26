//if (window == top) {
    window.addEventListener('load', function() {
        window.addEventListener('keyup', doKeyPress, false); //add the keyboard handler
    });
    
//}

trigger_key = 71; // g key
function doKeyPress(e){
    bid_data.forEach((item, index) => {
        if (e.altKey && e.keyCode == index + 49) { // if e.shiftKey is not provided then script will run at all instances of typing "G"
            copyTextToClipboard(item.content);    
        }
    });
}

