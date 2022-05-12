const form = document.getElementById("form")
const params = new FormData(form);
console.log(params);

//Create a function addContactToList to append contact to the list
function addContactToList(contact) {
    if (contact !== ""){
     let element = document.createElement('li');
     element.innerHTML=`
             <span class="task-text">${task}</span>
             <input type="text" class="task-input">
             <i class="uil uil-edit icon icon-edit"></i>
             <i class="uil uil-trash-alt icon icon-delete"></i>
         `
     element.classList.add('list-group-item')
     list.appendChild(element);
    }
 } 


//Add event listener for submitting the form
let btn= document.getElementById('submit');

btn.addEventListener("click",  function(event) {
    event.preventDefault();
    let newtask = document.getElementById('new-text-input');

    if (newtask !== ""){
        addTaskToList(newtask.value);
        //tasks.push = newtask.value;
    }

    document.getElementById('new-text-input').value = "";

})



//Create validations 


//Loop through params object


//Use switch for different types of input to get values


//Append form results in results div


//Bonus: add styling to the page


