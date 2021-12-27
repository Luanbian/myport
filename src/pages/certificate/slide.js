var estado = 0;
function slider() {
    var cerhar = document.getElementById('cerhar');
    var cerjh = document.getElementById('cerjh');
    var harcampus = document.getElementById('harcampus');
    var jhcampus = document.getElementById('jhcampus');

    if(estado === 0){
        fadeIn(cerhar, 1);
        fadeIn(harcampus, 1);
        fadeOut(cerjh, 1);
        fadeOut(jhcampus, 1);
        estado = 1;
    } else {
        fadeOut(cerhar, 1);
        fadeOut(harcampus, 1);
        fadeIn(cerjh,1);
        fadeIn(jhcampus, 1);
        estado = 0;
    }
    
}

function fadeIn(element, time) {
    processa(element, time, 0, 100);
}

function fadeOut(element, time) {
    processa(element, time, 100, 0);
}

function processa(element, time, initial, end) {
    if (initial === 0) {
      var increment = 2;
    } else {
        increment = -2;
    }

   var opc = initial;

    var intervalo = setInterval(function () {
        if ((opc === end)) {
            clearInterval(intervalo);
        } else {
            opc += increment;
            element.style.opacity = opc / 100;
        }
    }, time * 10);
}

export default slider;