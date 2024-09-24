// Common input function
function inputValue (id){
 const inputValues = parseFloat(document.getElementById(id).value);
 return inputValues;
}

// common gat function
function getVale(id){
    const getValues = parseFloat(document.getElementById(id).innerText);
    return getValues;
}
// Noakhali section
document.getElementById('noakhali-donate').addEventListener('click', function(event)
    {
        event.preventDefault();
    
        const noakhaliMoney = inputValue('noakhali-input');

        if(isNaN(noakhaliMoney) || noakhaliMoney <= 0){
            alert('Invalid Input')
            return;
        }else{
            const balance = getVale('noakhali-terGet');
            const newBalance = balance + noakhaliMoney;
            // set new value
            document.getElementById('noakhali-terGet').innerText = newBalance.toFixed(2);
            const terGetAmount =getVale('terget-amount');
            const newTerGetAmount = terGetAmount -noakhaliMoney;
            document.getElementById('terget-amount').innerText = newTerGetAmount.toFixed(2);
        }

        
    }
)


// Feni section
document.getElementById('feni-donate').addEventListener('click', function(event)
    {
        event.preventDefault();
        const feniMoney = inputValue('feni-input');

        if(isNaN(feniMoney) || feniMoney <= 0){
            alert('Invalid Input')
            return;
        }else{
            const balance = getVale('feni-terGet');
            const newBalance = balance + feniMoney;
            // set new value
            document.getElementById('feni-terGet').innerText = newBalance.toFixed(2);
            const terGetAmount =getVale('terget-amount');
            const newTerGetAmount = terGetAmount -feniMoney;
            document.getElementById('terget-amount').innerText = newTerGetAmount.toFixed(2);
        }
    }
)


// Quota section
document.getElementById('quota-donate').addEventListener('click', function(event)
    {
        event.preventDefault();
        const quotaMoney = inputValue('quota-input');

        if(isNaN(quotaMoney) || quotaMoney <= 0){
            alert('Invalid Input')
            return;
        }else{
            const balance = getVale('quota-terGet');
            const newBalance = balance + quotaMoney;
            // set new value
            document.getElementById('quota-terGet').innerText = newBalance.toFixed(2);
            const terGetAmount =getVale('terget-amount');
            const newTerGetAmount = terGetAmount -quotaMoney;
            document.getElementById('terget-amount').innerText = newTerGetAmount.toFixed(2);
        }
    }
)