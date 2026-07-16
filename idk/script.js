const bulb=document.querySelector(".cir");
const btn=document.querySelector(".btn");

let isOn=true;

btn.addEventListener("click", ()=>{
    if(isOn){
        bulb.style.backgroundColor="yellow";
        btn.textContent="OFF";
        isOn=false;
    }
    else{
        bulb.style.backgroundColor="transparent";
        btn.textContent="ON";
        isOn=true;
    }
})