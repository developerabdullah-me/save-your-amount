// function
function getInputValue(inputId) {
const incomesInput=document.getElementById(inputId).value;
//   error handling 
if(isNaN(incomesInput) || (incomesInput) < 0){
    return alert('please look your input fild'); 
 }
 return incomesInput;    

}
// calclaute buttons section
document.getElementById('calclaute').addEventListener('click', function(){
    // get id of cal
    const incomes=getInputValue('income');
    const inputFood=getInputValue('food');
    const inputRent=getInputValue('rent');
    const inputclothes=getInputValue('clothes');
    // totalCalclaute
     const totalCalclaute=parseFloat(inputFood)+parseFloat(inputRent)+parseFloat(inputclothes);
    //  totaltalExpenses
    const totaltalExpenses=document.getElementById('totaltal-expenses');
    totaltalExpenses.innerText = totalCalclaute;
     let balanceInput=document.getElementById('balance');
    //  totaltalExpenses minus to incomes
     balanceInput.innerText=incomes-totaltalExpenses.innerText;
    //  error handling
     if (balanceInput.innerText < 0) {
        return alert('Your expensess incomes not available')
    };
     
})

// save amount section
document.getElementById('save-btn').addEventListener('click',function(){
     const incomes=document.getElementById('income').value;
    //  saveInput
     const saveInput=document.getElementById('save').value;
    //  totalSave amount section
     let totalSave= parseFloat(incomes / 100)*parseFloat(saveInput);
    //  savingAmount
     const savingAmount = document.getElementById('saving-amount');
     savingAmount.innerText=totalSave;
    //  balanceInnerText
        let balanceInnerText=document.getElementById('balance');
         balanceInnerText.innerText;
        //  save amount Minus 
       const saveMinus= parseFloat(balanceInnerText.innerText)-parseFloat(savingAmount.innerText);
        //remening-balance
        const remeningBalance=document.getElementById('remening-balance')
            remeningBalance.innerText=saveMinus;
                 //  error handling
            if (remeningBalance.innerText < 0) {
                return alert('please look your incomes amount')
            }
    
})

