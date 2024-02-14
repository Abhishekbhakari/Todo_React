import './App.css'
import AddTodo from './components/AddTodo/AddTodo'

import TodoList from './components/TodoList/TodoList'

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, deleteTodo, editTodo, finishTodo} from './slice/TodoSlice';
function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ addTodo, deleteTodo, editTodo, finishTodo}, dispatch);
  return (
   <div className='bg-zinc-900 m-12 mt-12 ml-72 mr-72 pb-5  border-solid rounded-lg border-2 border-amber-400'>
        <div className="flex justify-center navbar bg-base-100">
            <a className=" btn btn-ghost text-xl  ">ToDo_</a>
        </div>
        <AddTodo  addTodo={actions.addTodo} />
        <TodoList className='bg-base-100' deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} finishTodo={actions.finishTodo} />
   </div>
  )
}

export default App
