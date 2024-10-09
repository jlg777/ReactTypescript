import { useState } from "react"
import {mockTodos} from "./mocks/mockTodos"
import Todos from "./components/Todos"
import { Todo } from "../definitions"


function App() {
const [todos, setTodos] = useState<Todo[]>(mockTodos)

const handleRemove = (id: string) => {
const newtodos = todos.filter (todo => todo.id != id)
setTodos(newtodos)
}

const handleCompleted = (id: Todo['id']) => {
  const newtodos = todos.map (todo => { 
    if (todo.id == id) {
      return {
        ...todo, 
        completed: !todo.completed,
      }
    }
    return todo
  })
  setTodos(newtodos)
}

//console.log(todos)
  return (
    <>
    <div className="todoapp">
     <Todos todos={todos} handleRemove={handleRemove} handleCompleted={handleCompleted}/>
    </div>
    </>
  )
}

export default App
