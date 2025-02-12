function showAlert(){
    alert('Hello! this is a javascript alert.');
}
function changeText(){
    document.getElementById('text').innerHTML = 'Text changed';
}
function handClick(){
    document.getElementById('clickMessage').innerHTML = 'Button clicked!';
}
function validateForm(){
let name = document.getElementById('name').value;
if(name==''){
    alert('please enter your name.');
    return false;
}
return true;
}
function checkNumber(){
    let num = parseInt(document.getElementById('ageInput').value);
    let result = num > 10 ? 'Greater than 10' : '10 or less';
    document.getElementById('numberResult').innerHTML = result;
}
function checkAge(){
    let age = parseInt(document.getElementById('ageInput').value);
    if(age >=18){
        document.getElementById('ageResult').innerHTML = 'you are an adult';
     } else{
     document.getElementById('ageResult').innerHTML = 'you are a minor'; 
        }
    }
    function displayArrayIteam(){
        let items = ['Apple','Banana','Cherry','Date','Elderberry'];
        let index = parseInt(document.getElementById('arrayIndex').value);
        let result = items[index] || 'Invalid index';
        document.getElementById('arrayResult').innerHTML = result;
    }

