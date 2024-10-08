import { useState } from "react"
import {mockTodos} from "./mocks/mockTodos"
import Todos from "./components/Todos"
import { Todo } from "../definitions"

function App() {
const [todos] = useState<Todo[]>(mockTodos)
console.log(todos)
  return (
    <>
     <p>todo mwvc</p>
     <Todos todos={todos}/>
    </>
  )
}

export default App
