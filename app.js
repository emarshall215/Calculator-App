let result = document.getElementById('outputScreen');

let calculate = (number) => {
    result.value += number;
} 

result.value

let Result = () => {
    try{
        result.value = eval(result.value)
    }
    catch(err){
        alert('Enter a valid Input')
    }
}

function clr(){
    result.value = " ";
}

function del(){
    result.value = result.value.slice(0,-1);
}

