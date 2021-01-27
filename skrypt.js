function zam(){
    var ksztalt=document.getElementById("ksztalt").value;
    var wypisz=document.getElementById("wypisz");
    var t='Zamówiłeś żelka: ';
    if(ksztalt==1){
        t+='miś';
    }else if(ksztalt==2){
        t+='żabki';
    }else if(ksztalt==3){
        t+='serce';
    }else{
        t+='inny kształt';
    };
    wypisz.innerHTML=t;

    var r=document.getElementById("r").value;
    var g=document.getElementById("g").value;
    var b=document.getElementById("b").value;
    var kolor=document.getElementById("kolor");
    kolor.style.backgroundColor="rgb("+r+","+g+","+b+")";
}