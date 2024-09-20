const picks = ["Bilder/alechando.jpg", "Bilder/amine1.jpg", "Bilder/anton1.jpg", "Bilder/con1.jpg", "Bilder/doedel.jpg", "Bilder/leo1.png", "Bilder/luay1.jpg", "Bilder/luckas1.jpg", "Bilder/lukassex.jpg", "Bilder/max1.png", "Bilder/max2.png", "Bilder/mopichmoll.jpg", "Bilder/recker.png", "Bilder/timti1.png", "Bilder/timti2.jpg", "Bilder/tobit1.jpg", "Bilder/tobit2.jpg", "Bilder/turk.jpg"];
const bilderNum = picks.length - 1;
var bilder = [];
var val = [];
var spin = false;

for (var i = 0; i < document.getElementsByClassName("bild").length; i++) {
    var elemend = document.getElementById("bild" + i);
    bilder.push(new Bild(document.getElementById("bild" + i), 10));
    val.push(0);
}

document.getElementById("spin").addEventListener("click", () => {
    if (!spin) {
        var temp = document.getElementsByClassName("bild");
        for (var key = 0; key < temp.length; key++) {
            temp[key].style.display = "inline";
        }
        for (var i = 0; i < bilder.length; i++) {
            val[i] = Math.round(Math.random() * bilderNum);
            bilder[i].spinn(picks[val[i]]);
        }
        console.log(val);
        fram();
        spin = true;
    }


})

fram();
function fram() {
    var end;
    var endcount = 0;
    bilder.forEach((value) => {
        if (value.end) {
            endcount += 1;
        }
    });
    if (endcount >= bilder.length) {
        end = true;
        spin = false;
    }
    if (!end) {
        bilder.forEach((value) => {
            value.fall()
        });
        requestAnimationFrame(fram);
        console.log("fall");
    }
}
