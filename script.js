var userInput = document.getElementById('input');
var enterBtn = document.getElementById('enterBtn');
var ul = document.querySelector('ul');
var reset = document.getElementById('reset');

for (let i = 0; i<localStorage.length ; i++)
{
    var li = document.createElement('li');
    var deleteBtn = document.createElement('button');
    li.innerHTML = localStorage.getItem(localStorage.key(i));
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.onclick = deleting;
    li.appendChild(deleteBtn);
    ul.appendChild(li);
}
function addingToList(){
    var li = document.createElement('li');
    var deleteBtn = document.createElement('button');
    li.innerHTML = userInput.value;
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.onclick = deleting;
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    localStorage.setItem(userInput.value+'<button>Delete</button>' , userInput.value);
    userInput.value = '';
}
function clicking(){
    if(userInput.value)
    {
        addingToList();
    }
}
function pressing(){
    if(userInput.value && event.keyCode === 13)
    {
        addingToList();
    }  
}
function deleting(){
    localStorage.removeItem(this.parentElement.innerHTML);
    this.parentElement.remove();
}


reset.onclick = function(){
    localStorage.clear();
    location.reload();
}

enterBtn.addEventListener('click',clicking);
userInput.addEventListener('keypress',pressing);