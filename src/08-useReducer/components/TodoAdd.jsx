import { useState } from "react"
import PropTypes from 'prop-types';
import { useForm } from "../../hooks";

export const TodoAdd = ({ onNewTodo }) => {
    /*
    const [inputValue, setInputValue] = useState({
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false
    })
    const onInputChange = ({ target }) => {
        setInputValue({
            id: new Date().getTime(),
            description: target.value,
            done: false
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.description?.trim().length <= 1) return 0;
        onNewTodo(inputValue);
        setInputValue({
            ...inputValue,
            description: ''
        })
    }
    //*/
    const {
        description,
        onInputChange,
        onResetForm
    } = useForm({description:''})

    const onSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) return 0;
        const newTodo ={
            id: new Date().getTime(),
            description,
            done: false
        }
        onNewTodo(newTodo);
        onResetForm();
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="description" id=""
                onChange={onInputChange}
                value={description}
                placeholder="Qué hay que hacer?"
            />
            <button type="submit">Agregar</button>
        </form>
    )
}
TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}
