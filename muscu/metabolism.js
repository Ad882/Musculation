function getValue() {
    var h = document.getElementById("height").value;
    var w = document.getElementById("weight").value;
    var a = document.getElementById("age").value;
    var g = document.getElementById("gender").value;
    
    if (g == 'Femme') {
        var out = (0.963 * Math.pow(w, 0.48) * Math.pow(h, 0.5) * Math.pow(a, -0.13)) * (100/4.1855);
    } else {
        var out = (1.083 * Math.pow(w, 0.48) * Math.pow(h, 0.5) * Math.pow(a, -0.13)) * (100/4.1855);

    }

    if(document.getElementById("result").style.display=="inline"){
        document.getElementById("result").style.display="none";
      }
      else{
        document.getElementById("result").style.display="flex";
      }

    document.getElementById("MB1.2").innerHTML= Math.trunc(out*1.2);
    document.getElementById("MB1.375").innerHTML= Math.trunc(out*1.375);
    document.getElementById("MB1.55").innerHTML= Math.trunc(out*1.55);
    document.getElementById("MB1.725").innerHTML= Math.trunc(out*1.725);
    document.getElementById("MB1.9").innerHTML= Math.trunc(out*1.9);

}
