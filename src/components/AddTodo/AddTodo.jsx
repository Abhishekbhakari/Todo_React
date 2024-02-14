import { useState } from "react";

function AddTodo({ addTodo }) {
    const [todoText, setTodoText] = useState('');

    function onAddTodo(todoText) {
        addTodo({todoText})
    }

    return (
        <div className="flex justify-center mt-10 gap-6 border bg-base-100 border-sky-900 p-6 m-5 rounded-t-xl ">
            <input 
                className="input input-bordered input-warning w-full max-w-xs"
                placeholder="add your next todo...."
                onChange={(e) => setTodoText(e.target.value)}
                value={todoText}
            />
            <button className="btn glass" onClick={() => {
               onAddTodo(todoText)
               setTodoText('');
            }}>Submit</button>
        </div>
    )

}

export default AddTodo;