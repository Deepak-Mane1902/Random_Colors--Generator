let Btn1 = document.getElementById("myBtn1");
let Btn2 = document.getElementById("myBtn2");
let innerTemp = document.querySelector(".copyCode")
let rgb1="#051937";
let rgb2=" #a8eb12";


const hexValues = ()=>{
    let hexValue = '0123456789abcdef'
    let color = "#";
    for(let i=0;i<6;i++){
        color = color + hexValue[Math.floor(Math.random()*16)];
    }
    return color;
}

const handleButton1 = ()=>{
        rgb1 = hexValues();
        Btn1.innerHTML = rgb1;
        document.body.style.backgroundImage = `
         linear-gradient(to right, ${rgb1} ,${rgb2})`
        innerTemp.innerHTML =  backgroundImage = 
        ` linear-gradient(to right, ${rgb1} ,${rgb2})`
        
        
    }
    const handleButton2 = ()=>{
        rgb2 = hexValues();
        Btn2.innerHTML = rgb2;
        document.body.style.backgroundImage = `
         linear-gradient(to right, ${rgb1} ,${rgb2})`
        innerTemp.innerHTML =  backgroundImage = 
        ` linear-gradient(to right, ${rgb1} ,${rgb2})`
    
   
        
}



Btn1.addEventListener("click",handleButton1);
Btn2.addEventListener("click",handleButton2);

innerTemp.addEventListener('click',()=>{
    navigator.clipboard.writeText(innerTemp.innerHTML);
    alert("Code Copied..!!!")
})