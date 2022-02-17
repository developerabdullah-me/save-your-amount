function getInputValue(inputId) {
const incomesInput=document.getElementById(inputId).value;
  if(isNaN(incomesInput)){
    return alert('abdullah tumi valhye jao');
   
 }
 return incomesInput;
     
}

document.getElementById('calclaute').addEventListener('click', function(){
    /*  const incomes=document.getElementById('income').value; */
    const incomes=getInputValue('income');
    //  incomes.value;
    const inputFood=getInputValue('food');
    const inputRent=getInputValue('rent');
    const inputclothes=getInputValue('clothes');
     /* const inputFood=document.getElementById('food').value;
     const inputRent=document.getElementById('rent').value;
     const inputclothes=document.getElementById('clothes').value; */
     const totalCalclaute=parseFloat(inputFood)+parseFloat(inputRent)+parseFloat(inputclothes);
    // console.log(totalCalclaute);
   
   
   
    const totaltalExpenses=document.getElementById('totaltal-expenses');
    totaltalExpenses.innerText = totalCalclaute;
    //  const b=incomes-totaltalExpenses;
     let p=document.getElementById('balance');
     p.innerText=incomes-totaltalExpenses.innerText;
     
})

document.getElementById('save-btn').addEventListener('click',function(){
     const incomes=document.getElementById('income').value;
     const k=document.getElementById('save').value;

     let e= parseFloat(incomes / 100)*parseFloat(k);

    
     const s = document.getElementById('saving-amount');
        s.innerText=e;

        let p=document.getElementById('balance');
         p.innerText;
       const saveMinus= parseFloat(p.innerText)-parseFloat(s.innerText);

        const d=document.getElementById('remening-balance')
            d.innerText=saveMinus;
    //  const saveparsent=document.getElementById('save-parsent').innerText;
    
})

