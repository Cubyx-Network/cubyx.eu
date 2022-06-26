let gr = document.getElementById("gr")
let ht = document.getElementById("ht")
let rl = document.getElementById("rl")
let r1 = document.getElementById("r1")
let r2 = document.getElementById("r2")
let r3 = document.getElementById("r3")

level1.style.backgroundSize = gr.value + "px " + gr.value + "px"
level2.style.backgroundSize = gr.value + "px " + gr.value + "px"
level3.style.backgroundSize = gr.value + "px " + gr.value + "px"

gr.addEventListener("change", function() {
    level1.style.backgroundSize = gr.value + "px " + gr.value + "px"
    level2.style.backgroundSize = gr.value + "px " + gr.value + "px"
    level3.style.backgroundSize = gr.value + "px " + gr.value + "px"
});
r1.addEventListener("change",function() {
    level1.style.transfrom = "rotate(" + r1 + "deg)"
    console.log("R1 wurde eingetragen!")
});
r2.addEventListener("change",function() {
    level1.style.transfrom = "rotate(" + r2 + "deg)"
    console.log("R2 wurde eingetragen!")
});
r3.addEventListener("change",function() {
    level1.style.transfrom = "rotate(" + r3 + "deg)"
    console.log("R3 wurde eingetragen!")
});

function toggleshowlevel2(){
    if (level2.style.opacity == "0"){
        level2.style.opacity = "100"
    }
    else if(level2.style.opacity == "100"){
        level2.style.opacity = "0"
    }
}

function toggleshowlevel3(){
    if (level3.style.opacity == "0"){
        level3.style.opacity = "100"
    }
    else if(level3.style.opacity == "100"){
        level3.style.opacity = "0"
    }
}