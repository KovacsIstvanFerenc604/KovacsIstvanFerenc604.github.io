
function terfogat(){
    var szam1=document.getElementById("szam1").value;
    var szam2=document.getElementById("szam2").value;
    var szam3=document.getElementById("szam3").value;
    var terfogatosszeg=parseInt(szam1)*parseInt(szam2)*parseInt(szam3);
    document.getElementById("terfogatosszeg").innerHTML= "Térfogata: "+terfogatosszeg; 

}
function felszin(){
    var szam1=document.getElementById("szam1").value;
    var szam2=document.getElementById("szam2").value;
    var szam3=document.getElementById("szam3").value;
    var felszinosszeg=2*(parseInt(szam1)*parseInt(szam2)+parseInt(szam2)*parseInt(szam3)+parseInt(szam1)*parseInt(szam3));
    document.getElementById("felszinosszeg").innerHTML= "Felszíne: "+felszinosszeg; 

}
