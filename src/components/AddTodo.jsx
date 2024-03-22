import { MdAddToQueue } from "react-icons/md";
import { useState } from "react";

function AddTodo({onNewItem}) {

    const[todoName,settodoName]=useState('')
    const[dueDate,setdueDate]=useState('')


    const handleNameChange=(event)=>{
        settodoName(event.target.value)
    }
    const handleDateChange=(event)=>{
        setdueDate(event.target.value)
    
    }
    const handleAddButtonClicked=()=>{
        onNewItem(todoName,dueDate)
        settodoName("")
        setdueDate("")
    }

    return (
        <div className="container ">
        <div className="row kg-row">
            <div className="col-sm">
                <input type="text" value={todoName} placeholder="to-do text here" onChange={handleNameChange}/>
            </div>
            <div className="col-sm">
                <input type="date" value={dueDate} onChange={handleDateChange} />
            </div>
            <div className="col-sm">
                <button type="button"  className="btn btn-success kg-btn"
                onClick={handleAddButtonClicked}
                >
                    <MdAddToQueue />
                </button>
            </div>
        </div>
    </div>
    );
}
export default AddTodo;