console.log('welcome in todo app using typescript');


//------------Types Define Specific Stuff
interface ITodos {
    id:string,
    title: string,
    description: string,
    isCompleted:boolean
}

//---------- Getting all the container data to add todos
const title = document.getElementById('title') as HTMLInputElement;
const description = document.getElementById('description') as HTMLInputElement;

const AddTodoBtn = document.getElementById('AddTodoBtn') as HTMLButtonElement;
const AddTodoForm = document.getElementById('AddTodoForm') as HTMLFormElement;

const ShowTodosDiv = document.getElementById('ShowTodos')!; //used this div, where we push the card of todos

const allTodos: Array<ITodos> = [];



//------------ Here is the di

//------ Function to add event listener to add todos
AddTodoForm.onsubmit = (e: SubmitEvent) => {
    e.preventDefault();

    // console.log(title.value,description.value)
    allTodos.unshift({id:Math.random().toString(), title: title.value, description: description.value,isCompleted:false });

    console.log('adding new todo',allTodos.length)

    renderTodos(allTodos);
}

//-----------function to generate the todos
const generateTodos = (item:ITodos)=>{
    const todoDiv = document.createElement('div');
    
    todoDiv.classList.add('card', 'col-3', 'mx-2', 'my-2');
    // ShowTodosDiv.style.width = "18rem";

    //Check box to confirm to complete
    const checkBox:HTMLInputElement = document.createElement('input');
    checkBox.setAttribute('type','checkbox');
    checkBox.className = 'checkbox';
    checkBox.checked = item.isCompleted;

    //Creating the title and description
    const title:HTMLHeadingElement = document.createElement('h5');
    title.classList.add("card-title", "text-capitalize");
    title.innerText = item.title;

    const paragraph:HTMLParagraphElement = document.createElement('p');
    paragraph.classList.add('card-text');
    paragraph.innerText = item.description

    //Creating button to delete
    const deleteBtn:HTMLButtonElement = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'deleteBtn');
    deleteBtn.innerText = 'Delete Todo'


    //Appending all to in todo item
    todoDiv.append(checkBox,title,description,deleteBtn);

    ShowTodosDiv.append(todoDiv);

}


//--------------function to rendering the todos
const renderTodos = (todos:ITodos[])=>{

    todos.forEach(item =>{
        generateTodos(item);
    })
}