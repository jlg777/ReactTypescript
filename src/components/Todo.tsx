import { type Todo as TodoTypes } from '../../definitions'

interface Props extends TodoTypes {
  handleRemove: (id: TodoTypes['id']) => void
  handleCompleted:(id: TodoTypes['id']) => void
}
 
const Todo= ({ id, title, completed, handleRemove, handleCompleted }: Props) => {
  return (
    <div className="view">
      <input type="checkbox" className="toggle" checked={completed} onChange={() => {handleCompleted(id)}} />
      <label htmlFor="">{title}</label>
      <button className='destroy' onClick={() => {handleRemove(id)}}></button>
    </div>
  )
}

export default Todo
