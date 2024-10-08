import { type Todo as TodoTypes } from '../../definitions'

type Props = TodoTypes;

const Todo= ({ id, title, completed }: Props) => {
  return (
    <div className="view">
      <input type="checkbox" className="toggle" checked={completed} onChange={() => {}} />
      <label htmlFor="">{title}</label>
      <p>{id}</p>
      <button></button>
    </div>
  )
}

export default Todo
