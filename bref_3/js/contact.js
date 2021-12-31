let nom=document.getElementById("name");
let persEmail=document.getElementById("email");
let sujet=document.getElementById("subject");
let msg=document.getElementById("message");
document.forms[0].onsubmit=function(e){
    let nomValid=false;
    let emailValid=false;
    let sujetValid=false;
    let msgValid=false;
    if(nom.value!=="" && nom.value.length<=10)
    {
        nomValid=true;
    }
    if(persEmail.value!=="" && persEmail.value.length<=30)
    {
        emailValid=true;
    }
    if(sujet.value!=="" && sujet.value.length<=10)
    {
        sujetValid=true;
    }
    if(msg.value!=="" && msg.value.length<=50)
    {
        msgValid=true;
    }
    if(nomValid==true || emailValid===true || sujetValid===true || msgValid===true)
    {
        alert("(madame/monsieur) "+nom.value+" votre message à été envoyer.");
    }
    if(nomValid===false || emailValid===false || sujetValid===false || msgValid===false)
    {
        e.preventDefault();
    }

};