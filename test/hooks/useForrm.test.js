import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm',()=>{
    const initialForm={
        name:'Miguel',
        email:'miguel@email.com'
    }
    test('debe de regresar la información por defecto',()=>{
        const {result}=renderHook(()=>useForm(initialForm));
        expect(result.current).toEqual({
            name:initialForm.name,
            email:initialForm.email,
            formState:initialForm,
            onInputChange:expect.any(Function),
            onResetForm:expect.any(Function) 
        })

    })
    test('debe cambiar el nombre del formulario',()=>{
        const newValue = 'Karla';
        const {result}=renderHook(()=>useForm(initialForm));
        const {onInputChange}=result.current;
        act(()=>{
            onInputChange({target:{"name":'name',"value":newValue}});
        });
        expect(result.current.name).toBe(newValue);
    })
    
    test('debe realizar el reset del formulario',()=>{
        const newValue = 'Karla';
        const {result}=renderHook(()=>useForm(initialForm));
        const {onInputChange,onResetForm}=result.current;
        act(()=>{
            onInputChange({target:{"name":'name',"value":newValue}});
        });
        expect(result.current.name).toBe(newValue);
        act(()=>{
            onResetForm(); 
        });
        expect(result.current.name).toBe(initialForm.name);
    })
})