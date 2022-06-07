const boxes = document.querySelectorAll(".box");
const closeMessage = document.querySelector('#close');
const messageCre = document.querySelector('#messageCreate');
const messageDel = document.querySelector
('#messageDelete');
const modal = document.querySelector(".modalDelete")
const ancora = document.querySelector("#apagarTerror")

ancora.addEventListener("click", function (){
    console.log("ola teste teste teste teste")

    if(modal.style.display === 'none'){
        modal.style.display = 'flex'
    }else{
        modal.style.display = "none"
    }
})

const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) =>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom) box.classList.add("show");
        else box.classList.remove("show");
    }) 
};


window.addEventListener("scroll", checkBoxes);
checkBoxes();


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