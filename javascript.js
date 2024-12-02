let input = document.querySelector('input');

input.addEventListener('keyup' , ()=> {
    input.value =  eleteDash(input.value));
})

function deleteDash(input){
    return input.replace(/ - /g,''); 
}

function addDash(input){
    return Array.from(input).join(' - ');
}

