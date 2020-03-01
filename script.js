var userInput = document.getElementById('input');
var enterBtn = document.getElementById('enterBtn');
var ul = document.querySelector('ul');
var reset = document.getElementById('reset');

// ----------- To get previous items when reload the page -------------
for (let i = 0; i<localStorage.length ; i++)
{
    var li = document.createElement('li');
    var deleteBtn = document.createElement('button');
    li.innerHTML = localStorage.getItem(localStorage.key(i)); //Grap previous item's value from LOCAL STORAGE
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
    localStorage.setItem(userInput.value+'<button>Delete</button>' , userInput.value); //Set item in local storage and adding that text to the key to be able to get it and delete it easliy..
    userInput.value = '';
}
function clicking(){
    if(userInput.value)  //checking if the input is empty or not!
        addingToList();
}
function pressing(){
    if(userInput.value && event.keyCode === 13)  //checking if the input is empty or not and make Enter button on the keyboard working!
        addingToList();
}
function deleting(){
    localStorage.removeItem(this.parentElement.innerHTML); //remove items from the localstorage!
    this.parentElement.remove();    //remove from the list!
}
reset.onclick = function(){  //to reset the local storage and start over!
    localStorage.clear();
    location.reload();
}
enterBtn.addEventListener('click',clicking);
userInput.addEventListener('keypress',pressing);