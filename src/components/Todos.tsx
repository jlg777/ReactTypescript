import { TodosProps } from '../../definitions'
import Todo from './Todo'

const Todos = ({ todos }: TodosProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          {todo.title}
          <Todo id={todo.id} title={todo.title} completed={todo.completed} />
        </li>
      ))}
    </ul>
  )
}
export default Todos
