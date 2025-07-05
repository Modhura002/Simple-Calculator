let displayBtn=document.querySelector(".display");
let numBtn=document.querySelectorAll(".buttons button");//buttons button to select the buttons. only buttons selects the container without the buttons
numBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let num=btn.getAttribute("id");
         displayBtn.innerText+=num;
        console.log(num);
    });

});

