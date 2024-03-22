import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Todoitems from "./components/Todoitems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {

  const initialToDoItem=[
   
  ]
  
  const [todoItem,setTodoItem]=useState([])

  const handleOnItem=(itemName,itemDueDate)=>{

    const newTodoItem=[
      ...todoItem,{name:itemName,duedate:itemDueDate}]
      setTodoItem(newTodoItem)
  }

  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItem.filter((item)=> item.name !==todoItemName)
    setTodoItem(newTodoItems)
  }

  return <div className="Todo-container">
    <AppName />
    <AddTodo onNewItem={handleOnItem} />
    {todoItem.length===0 && <WelcomeMsg />}
    <Todoitems todoitems={todoItem} 
    onDeleteClick={handleDeleteItem}/>

  </div>

}

export default App
