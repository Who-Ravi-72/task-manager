import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuid } from 'uuid';

function App() {
  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);
  
  const handleEdit = (e,id ) => {
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
    saveToLS()
  }
   const handleDelete= (e, id)=>{  
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos) 
    saveToLS()
  }
  const handleAdd = () => {
    setTodos([...todos,{id: uuid(), todo, isCompleted: false}])
    setTodo("")
    saveToLS()
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
    saveToLS()
  }
  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS()
  }
  return (
    <>
    <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-blue-100 min-h-[80vh]">
        <div className="add-todo">
          <h2 className="text-2xl font-bold">Add Task</h2>
          <input onChange={handleChange} value={todo} type="text" placeholder="Add Your Task" className="bg-white rounded p-2 w-100 " />
          <button onClick={handleAdd} className="bg-violet-500 text-sm hover:bg-violet-800 p-5 py-4 text-white rounded-md mx-6">Add</button>
        </div>
        <h2 className="text-xl font-bold">Your Task's</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5">No Task to display</div>}
          {todos.map(item=>{
        return  <div key={item.id} className="todo flex w 1/4 my-3 justify-between">
          <div className="flex gap-3">
            <input name={item.id} onClick={handleCheckBox} type="checkbox" value={item.isCompleted} />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          </div>
            <div className="buttons">
              <button onClick={(e) => handleEdit(e,item.id)} className="bg-violet-500 text-sm hover:bg-violet-800 p-3 py-1 text-white rounded-md mx-1">Edit</button>
              <button onClick={(e)=>{handleDelete(e, item.id)}} className="bg-violet-500 text-sm hover:bg-violet-800 p-3 py-1 text-white rounded-md mx-1">Delete</button>
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
