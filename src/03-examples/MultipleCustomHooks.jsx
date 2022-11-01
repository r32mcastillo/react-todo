import { useCounter,useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
    const {counter,increment}=useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //https://www.udemy.com/course/react-cero-experto/learn/lecture/19827558#questions
    const {author,quote}=(!!data) && data[0];

    return (
        <>
            <div>MultipleCustomHooks</div>
            <hr />

            {
                (isLoading) 
                ? <LoadingQuote/>
                : <Quote quote={quote} author={author}/>
            }
            <br/>
            <button onClick={()=>increment(1)}
            disabled={isLoading}>
                Siguiente
            </button>
        </>
    )
}
