const toDoForm = document.getElementById("to-do-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("to-do-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
   localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(e)
{
  const li=e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTODo)
{
   const li = document.createElement("li");
   li.id = newTODo.id;
   const span = document.createElement("span");
   span.innerText=newTODo.text;
   const btr = document.createElement("button");
   btr.innerText ="❌";
   btr.addEventListener("click",deleteToDo);
   li.appendChild(span);
   li.appendChild(btr);
   toDoList.appendChild(li);
}

function handleTodoSubmit(e)
{
   e.preventDefault();
   const newTodo = toDoInput.value;
   toDoInput.value="";
   const newTodoObj = {
      text:newTodo,
      id:Date.now(),
   }
   toDos.push(newTodoObj);
   paintToDo(newTodoObj);
   saveToDos();
}

toDoForm.addEventListener("submit",handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
