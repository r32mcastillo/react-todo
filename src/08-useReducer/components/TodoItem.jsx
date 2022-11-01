
import PropTypes from'prop-types';

export const TodoItem = ({todo,onDeleteTodo,onToggleTodo}) => {
  return (
    <li className='mi-li'>
      <span aria-label='span' className='mi-item' onClick={()=>onDeleteTodo(todo.id)}>&#10060;</span>
      <span aria-label='span' className='mi-item' onClick={()=>onToggleTodo(todo.id)}>
        {
        todo.done 
        ?<>&#127383;</>
        :<>&#9203; </>
        }
      
       
      {todo.description}
      </span>
    </li>
  )
}
TodoItem.propTypes={
    todo:PropTypes.object.isRequired
}
