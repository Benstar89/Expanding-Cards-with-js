const div = document.querySelectorAll(".Cards");

let isOpen = false;

const showFully = (event) => {
    console.log(event.target.childNodes[1].style.display)
    isOpen = !isOpen;
    if(isOpen){
        event.target.childNodes[1].style.display = "block";
        event.target.style.width = "500px";
    }else{
        event.target.style.width = "100px";
        event.target.childNodes[1].style.display = "none";
    }
}
div.forEach(div => addEventListener("click" , showFully));