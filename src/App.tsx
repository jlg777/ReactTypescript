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

//console.log(todos)
  return (
    <>
    <div className="todoapp">
     <Todos todos={todos} handleRemove={handleRemove}/>
    </div>
    </>
  )
}

export default App
