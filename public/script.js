
const closeMessage = document.querySelector('#close');
const messageCre = document.querySelector('#messageCreate');
const messageDel = document.querySelector
('#messageDelete');



closeMessage.addEventListener("click", function (){
    messageCre.style.display = "none";
});

setTimeout(() => {
    messageCre.style.display = "none";
}, 5000);


closeMessage.addEventListener("click", function (){
    messageDel.style.display = "none";
});

setTimeout(() => {
    messageDel.style.display = "none";
}, 5000);

ancora.addEventListener("click",() => {
let text;
if(confirm("Press a button!") == true){

}else{

}


})   