import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');
describe('Pruebas en <MultipleCustomHooks/>',()=>{

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({ 
        counter:1,
        increment:mockIncrement
         });
    beforeEach(()=>{jest.clearAllMocks()});

    
    test('debe de mostrar el componente por defecto',()=>{
        useFetch.mockReturnValue({
            data:null,
            isLoading:true,
            hasError:null
        });
        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Cargando ...'));
        screen.debug();
    })
    test('debe de mostrar on Quote',()=>{
        useFetch.mockReturnValue({
            data:[{author:'Miguel',quote:'Hola Mundo'}],
            isLoading:false,
            hasError:null
        });
        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Miguel')).toBeTruthy();
        const nextButton = screen.getByRole('button',{name:'Siguiente'});
        expect(nextButton.disabled).toBeFalsy();
    })
    test('debe de llamar la función de incrementar',()=>{
        useFetch.mockReturnValue({
            data:[{author:'Miguel',quote:'Hola Mundo'}],
            isLoading:false,
            hasError:null
        });

        render(<MultipleCustomHooks/>);
        
        const nextButton = screen.getByRole('button',{name:'Siguiente'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    })
})