
export const Quote = ({quote,author}) => {
    return (

        <blockquote>
            <p>{quote}</p>
            <footer>{author}</footer>
        </blockquote>
    )
}
