let displayBtn=document.querySelector(".display");
let numBtn=document.querySelectorAll(".buttons button");//buttons button to select the buttons. only buttons selects the container without the buttons
let expression="";
numBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let val=btn.getAttribute("id");
        
         
        if(val==="="){
            calculate();}
        else if(val==="AC"){
            displayBtn.innerText="";
            expression="";
        }
        else if(val==="DEL"){
            expression=expression.slice(0,-1);
            displayBtn.innerText=displayBtn.innerText.slice(0,-1);
        }
        else{
             displayBtn.innerText+=val;
            expression+=val;
        }
    });

});

const calculate=()=>{
    try{
   let result= eval(expression);
   displayBtn.innerText=result;
   expression=result.toString();
   }
   catch(error){
    displayBtn.innerText="Error";
    expression="";
   
   }

   
}

