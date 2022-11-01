const { renderHook, act } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks/useCounter");

describe('Pruebas en el useCounter',()=>{
    test('debe de retornar los valores por defecto',()=>{
        const {result}=renderHook(()=>useCounter());
        const {counter,increment,decrement,reset} = result.current;
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });
    test('debe de generar el counter con el valor de 100',()=>{
        const {result}=renderHook(()=>useCounter(100))
        const {counter}=result.current;

        expect(counter).toBe(100);
    })
    test('debe incrementar el contador',()=>{
        const {result}=renderHook(()=>useCounter(100));
        const {counter,increment}=result.current;
        act(()=>{
            increment();
            increment(2);
        });
        expect(result.current.counter).toBe(103);
    })
    test('debe realizar el reset',()=>{
        const {result}=renderHook(()=>useCounter(100));
        const {counter,increment,reset}=result.current;
        act(()=>{
            increment();
            increment(2);
        });
        expect(result.current.counter).toBe(103);
        act(()=>{
            reset();
        });
        expect(result.current.counter).toBe(100);
    })
})