let rotation_input = document.getElementById("rotation-input");
let mask = document.getElementById("mask")
let zoom = document.getElementById("zoom")

var zoomfaktor = zoom / 100

rotation_input.addEventListener('change', function() {
    mask.style.transform = "rotate(" + rotation_input.value + "deg)"
});

zoom.addEventListener('change', function() {
    main.style.backgroundSize = zoom.value + "px " + zoom.value + "px"
    mask.style.backgroundSize = zoom.value + "px " + zoom.value + "px"
});

//function links(){
//    let XPOS = document.getElementsByClassName(starmap).style.backgroundPositionX.value
//    main.style.backgroundPositionX = XPOS - 1
//}

function toggleshow(){
    if (mask.style.opacity == "0"){
        mask.style.opacity = "100"
    }
    else if(mask.style.opacity == "100"){
        mask.style.opacity = "0"
    }
}

//let position_x = 500

//function links(){
//    position_x = position_x - 1
//    mask.style.background-position-x = position_x
//}