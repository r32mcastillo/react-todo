import { TodoItem } from "./TodoItem";
import PropTypes from 'prop-types';

export const TodoList = ({ todos = [], onDeleteTodo ,onToggleTodo}) => {
  return (
    <ul>
      {
        todos.map(todo => (
          <TodoItem key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))
      }
    </ul>
  )
}
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}