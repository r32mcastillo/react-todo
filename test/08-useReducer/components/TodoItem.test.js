import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/components/TodoItem";

describe('Pruebas en <TodoItem/>',()=>{
    const todo={
        id:1,
        description:'Casa',
        done:false
    }
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(()=>jest.clearAllMocks());

    test('debe de mostrar el TODO pendiente de completar',()=>{

        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock} />);

        const liElement = screen.getByRole('listitem');
        const spanElementAll = screen.getAllByLabelText('span');
        const spanElement = spanElementAll[1];
        //console.log(spanElementAll);
        //screen.debug();  
        //<span>❌</span><span>⏳ Casa</span>
        expect(liElement.className).toBe("mi-li");
        expect(spanElement.className).toBe("mi-item");
        expect(spanElement.innerHTML).toContain("⏳");
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);  
        
        
        fireEvent.click(spanElementAll[0]);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id); 
        
    })
})