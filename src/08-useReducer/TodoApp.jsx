import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    hondleDeleteTodo,
    handleToggleTodo} = useTodo();
  
  return (
    <>
      <div>TodoApp</div>
      <hr />
      <div>
        <h4>
          Agregar TODO
        </h4>
        <hr />
      </div>
      <TodoAdd onNewTodo={handleNewTodo} />
      <hr />
      <TodoList todos={todos} 
      onDeleteTodo={hondleDeleteTodo} 
      onToggleTodo={handleToggleTodo}
      />

    </>
  )
}
