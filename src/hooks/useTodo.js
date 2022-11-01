import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";
const initialState = [
    /*   {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false
      } */
];
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const handleNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        }
        dispatch(action);
    }
    const hondleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    return {
        todos,
        handleNewTodo,
        hondleDeleteTodo,
        handleToggleTodo,
    }
}
