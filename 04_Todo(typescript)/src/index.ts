console.log('welcome in todo app using typescript');

//---------- Getting all the container data to add todos
const title = document.getElementById('title') as HTMLInputElement;
const description = document.getElementById('description') as HTMLInputElement;

const AddTodoBtn = document.getElementById('AddTodoBtn') as HTMLButtonElement;
const AddTodoForm = document.getElementById('AddTodoForm') as HTMLFormElement;

//------------ Here is the di

//------ Function to add event listener to add todos
AddTodoForm.onsubmit = (e:SubmitEvent)=>{
    e.preventDefault();

    console.log(title.value,description.value)
}