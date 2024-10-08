import { TodosProps } from '../../definitions'
import Todo from './Todo'



const Todos = ({ todos, handleRemove }: TodosProps) => {
    return (
        <ul className='todo-list'>
            {todos.map((todo) => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo id={todo.id} title={todo.title} completed={todo.completed} handleRemove={handleRemove} />
                </li>
            ))}
        </ul>
    )
}
export default Todos
