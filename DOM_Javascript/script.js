
    const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

    //Get items list by id
    let list=  document.getElementById('items');

    //Create a function addTaskToList to append task to the list
    function addTaskToList(task) {
       if (task !== ""){
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

    // Load tasks using loop and calling function addTaskToList
    for(let i = 0; i < tasks.length; i++){
        addTaskToList(tasks[i]);
    }


    //Get submit button by id
    let btn= document.getElementById('submit');
    //const form = document.querySelector("#submit");   // achar o id do botao

    // Add event listener on submit button to add new tasks by clicking it
    btn.addEventListener("click",  function(event) {
        event.preventDefault();
        let newtask = document.getElementById('new-text-input');

        if (newtask !== ""){
            addTaskToList(newtask.value);
            //tasks.push = newtask.value;
        }

        document.getElementById('new-text-input').value = "";

    })
    

    /*
        - Add event listener to task list
        - Check if icon delete or icon edit was clicked
        - If icon delete clicked, remove parent element
        - If icon edit clicked, hide span, show input and add span text to input
        - For edit icon, add event listener to press enter key, to update and show span text and hide input
    */

  list.addEventListener("click", function(event){
   // alert('Task Clicked');
   
     if (event.target.classList.contains("icon-delete")){
        //alert('Task Deleted');
        event.target.parentElement.remove()
     }else if(event.target.classList.contains("icon-edit")){
        //alert('Task Edit');
        let input = event.target.previousElementSibling
        input.style.display = "inline-block"
        
        let span = input.previousElementSibling
        span.style.display = "none"

        input.value = span.textContent

        input.addEventListener("keypress", function(event){
          
          if (event.keyCode == 13){
            span.textContent =  input.value
            span.style.display = "inline-block"
            input.style.display = "none"
          }
        }
        )
    }

  })  

      
