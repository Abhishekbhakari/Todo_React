import { useState } from "react";

function Todo({ finishTodo, editTodo, deleteTodo, text, isFinished }) {

    const [isEditting, setIsEditting] = useState(false);
    const [todoText, setTodoText] = useState(text);

    return (
        <div className="flex justify-center gap-10 mt-5 border-b border-base-100 pb-2  ">  
            <input type="checkbox"  checked={isFinished} onChange={() => finishTodo(!isFinished)} className=" checkbox checkbox-warning" />
            {isEditting? <input value={todoText} onChange={(e) => setTodoText(e.target.value)} /> : <span className="w-32"> {todoText} </span>}
            <button className="btn" onClick={() => {
                setIsEditting(!isEditting);
                editTodo(todoText);
            }}> {isEditting? 'Save' : 'Edit'} </button>
            <button className="btn btn-active btn-neutral" onClick={deleteTodo}> Delete </button>
        </div>
    );
}
export default Todo;