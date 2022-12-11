document.getElementById('player').addEventListener("mouseover",sumarPuntos);

let puntos = 0;
let tiempo = 60;
let necesarios = 30;

function sumarPuntos(){
    puntos ++;
    document.getElementById("puntos").innerHTML = "puntos: <b>" + puntos + "/" + necesarios + "  </b>";
    randNum = Math.round(Math.random()*500);
    randNum2 = Math.round(Math.random()*500)
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    if(puntos == 30){
        alert("ganaste");
    }
}

function restarTiempo(){
    tiempo --
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbspTiempo: " + tiempo;
    if(tiempo == 0){
        alert("perdiste");
        tiempo = 0;
        puntos = 0;
    }
}

setInterval(restarTiempo, 1000);
