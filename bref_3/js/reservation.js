var type,prix=0,bonus_boite_vitesse,bonus_carburant;
let a=document.getElementById("type_vehicule");
a.onchange= function(type)

{
    type=a.value;
    switch(type)
    {
        case "moto":
            document.getElementById("hybride").disabled=true;
            document.getElementById("essence").disabled=false;
            document.getElementById("electrique").disabled=false;
            document.getElementById("diesel").disabled=true;

            document.getElementById("manuelle").disabled=true;
            document.getElementById("automatique").disabled=true;
            document.getElementById("autre").disabled=false;
            break;
        case "compact":
            document.getElementById("hybride").disabled=false;
            document.getElementById("essence").disabled=false;
            document.getElementById("electrique").disabled=true;
            document.getElementById("diesel").disabled=false;
            document.getElementById("manuelle").disabled=false;
            document.getElementById("automatique").disabled=true;
            break;
        case "citan":
            document.getElementById("hybride").disabled=false;
            document.getElementById("essence").disabled=false;
            document.getElementById("electrique").disabled=false;
            document.getElementById("diesel").disabled=false;
            document.getElementById("manuelle").disabled=false;
            document.getElementById("automatique").disabled=true;
            break;
        case "utilitaire":
            document.getElementById("hybride").disabled=false;
            document.getElementById("essence").disabled=false;
            document.getElementById("electrique").disabled=false;
            document.getElementById("diesel").disabled=false;
            document.getElementById("manuelle").disabled=false;
            document.getElementById("automatique").disabled=true;
            break;
        case "berlin":
            document.getElementById("hybride").disabled=false;
            document.getElementById("essence").disabled=false;
            document.getElementById("electrique").disabled=false;
            document.getElementById("diesel").disabled=false;
            document.getElementById("manuelle").disabled=true;
            document.getElementById("automatique").disabled=false;
            break;   
        case "camion":
            document.getElementById("hybride").disabled=false;
            document.getElementById("essence").disabled=false;
            document.getElementById("electrique").disabled=false;
            document.getElementById("diesel").disabled=false;
            document.getElementById("manuelle").disabled=true;
            document.getElementById("automatique").disabled=false;
            break; 
    }
} 

let button=document.getElementById("submit");
button.onclick=function() {
    var car = document.getElementById('type_vehicule').value;
    var carb=document.getElementById('carburant').value;
    var boite = document.getElementById('boite-vitesse').value;
    var duree_reservetion = document.getElementById('duree-reservation').value;
    switch(car){
        case "moto":
            prix+=10;
            break;
            case "compact":
                prix+=14;
                break;
            case "citan":
                prix+=12;
                break;
            case "utilitaire":
                prix+=16;
                break;
            case "berlin":
                prix+=20;
                break;   
            case "camion":
                prix+=250;
                break; 
    }
    switch(carb){
        case "essence":
            bonus_carburant=0.14;
            break;
        case "diesel":
            bonus_carburant=0.21;
            break;
        case "electrique":
            bonus_carburant=0.5;
            break;
        case "hybride":
            bonus_carburant=0.9;
            break;
    }
    if(boite=="automatique"){
        bonus_boite_vitesse=0.19;
    }

    var res=parseFloat((prix+prix*(bonus_boite_vitesse+bonus_carburant))*duree_reservetion);
    console.log(res);
}
