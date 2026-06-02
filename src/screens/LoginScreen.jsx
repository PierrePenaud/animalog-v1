import { useState } from "react"

function LoginScreen({ onLogin }) {
    const [prenom, setPrenom] = useState("")
    return (
        <div>
            <div></div>
            <input
                value={prenom}
                onChange={e => setPrenom(e.target.value)}
            />
            <button
                onClick={() => onLogin(prenom)}
            >
                Valider
            </button>
        </div>
    )
}

export default LoginScreen