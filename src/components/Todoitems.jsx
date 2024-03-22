import style from './Todoitems.module.css'
import Todoitem from "./Todoitem"
const Todoitems=({todoitems,onDeleteClick })=>{
    return <div className={style.itemContainer}>
        {
            todoitems.map((item)=>(
                <Todoitem key={item.name} todoName={item.name} 
                todoDate={item.duedate} 
                onDeleteClick={onDeleteClick}
                />
            ))
        }
    
     
    </div>
}
export default Todoitems;