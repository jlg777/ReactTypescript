import { useState } from 'react'
import { mockTodos } from './mocks/mockTodos'
import Todos from './components/Todos'
import { Todo } from '../definitions'
import Footer from './components/Footer'
import { FilterValue, TODO_FILTERS } from './untils/const'

function App() {
  const [todos, setTodos] = useState<Todo[]>(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = (id: string) => {
    const newtodos = todos.filter((todo) => todo.id != id)
    setTodos(newtodos)
  }

  const handleCompleted = (id: Todo['id']) => {
    const newtodos = todos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(newtodos)
  }

  const handleFilterSelected = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <>
      <div className="todoapp">
        <Todos
          todos={filteredTodos}
          handleRemove={handleRemove}
          handleCompleted={handleCompleted}
        />
        <Footer filterSelected={filterSelected} onFilterChange={handleFilterSelected} />
      </div>
    </>
  )
}

export default App
