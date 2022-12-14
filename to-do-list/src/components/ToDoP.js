import React, {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { RiCloseCircleLine} from 'react-icons/ri';
import { TiEdit} from 'react-icons/ti';

function ToDoP({todos, completeTodo, removeTodo, updateTodo}) {
const[edit, setEdit] = useState({

id:null,
value:''
});


const submitUpdate = value =>{

updateTodo(edit.id, value)
setEdit({
id: null,
value: ''
});
};

if (edit.id){
  return <TodoForm edit={edit} onSubmit={submitUpdate} />;
}


  return todos.map((todo, index) => (

  <div className={todo.isComplete ? 'todo-row complete' :
'todo-row'} Key={index}>

<div key={todo.id} onClick={() => completeTodo(todo.id)}>
  {todo.text}
</div>

<div classNam="icons">

<RiCloseCircleLine 
onClick={() => removeTodo(todo.id)}
className="delete-icon"
/>
<TiEdit
onClick={() => setEdit({ id: todo.id, value: todo.text})}
className="edit-icon"
/>

</div>


</div>
  ));

}

export default ToDoP;
