let displayBtn=document.querySelector(".display");
let numBtn=document.querySelectorAll(".buttons button");//buttons button to select the buttons. only buttons selects the container without the buttons
let expression="";
numBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let val=btn.getAttribute("id");
         displayBtn.innerText+=val;
        console.log(val);
        if(val==="="){
            calculate();}
        else if(val==="C"){
            displayBtn.innerText="";
            expression="";
        }
        else{
            expression+=val;
        }
    });

});

const calculate=()=>{
    try{
   let result= eval(expression);
   displayBtn.innerText=result;
   console.log(result);}
   catch(error){
    displayBtn.innerText="error";
    console.log("error");
   }

   
}

