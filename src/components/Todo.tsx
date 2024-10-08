import { type Todo as TodoTypes } from '../../definitions'

interface Props extends TodoTypes {
  handleRemove: (id:string) => void

}
 
const Todo= ({ id, title, completed, handleRemove }: Props) => {
  return (
    <div className="view">
      <input type="checkbox" className="toggle" checked={completed} onChange={() => {}} />
      <label htmlFor="">{title}</label>
      <button className='destroy' onClick={() => {handleRemove(id)}}></button>
    </div>
  )
}

export default Todo
