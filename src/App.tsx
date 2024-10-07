import { useState } from "react"
import {mockTodos} from "./mocks/mockTodos"

function App() {
const [todos, setTodos] = useState(mockTodos)
console.log(todos)
  return (
    <>
     <p>todo mwvc</p>
    </>
  )
}

export default App
