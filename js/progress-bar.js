function move(percent, barId) {

    //var elem = document.querySelector('#html'); 
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= percent) {
            clearInterval(id);
        } else {
            width++; 
            barId.style.width = width + '%'; 
            barId.innerHTML = width * 1 + '%';
        }
    }
}