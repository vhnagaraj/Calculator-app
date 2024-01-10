let input = document.querySelector('input');

let button = document.querySelectorAll('button').forEach((button) =>{
    button.addEventListener('click',(e)=>{
        let buttonText = e.target.innerText;

        if(buttonText === '='){
            try{
                input.value = eval(input.value);
            } catch(error){
                input.value = 'Syntax Error';
            }
        }

        else if (buttonText === 'c'){
            input.value = '';
        }

        else{
            input.value = input.value + buttonText;
        }
         
    })
})