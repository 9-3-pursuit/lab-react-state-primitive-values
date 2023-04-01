import App from "./App"

export default function Victory(){
    return (
        <alert>
            <h2>You Win!</h2>
            <button onClick={() => window.location.reload(false)}>Play Again?</button>
        </alert>
    )
}