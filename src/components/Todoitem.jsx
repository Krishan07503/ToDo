import { RiDeleteBin2Fill } from "react-icons/ri";
import Todoitems from "./Todoitems";

function Todoitem({todoName,todoDate,onDeleteClick}) {
    return (
        <div className="container ">
            <div className="row kg-row">
                <div className="col-sm">{todoName}</div>
                <div className="col-sm">{todoDate}</div>
                <div className="col-sm">
                    <button type="button" className="btn btn-danger kg-btn"
                    onClick={()=>onDeleteClick(todoName)}
                    >
                        <RiDeleteBin2Fill />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Todoitem;