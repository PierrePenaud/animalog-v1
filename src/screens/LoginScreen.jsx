import { useState } from "react"

function LoginScreen({ onLogin }) {
    const [prenom, setPrenom] = useState("")
    return (
        <div>
            <div></div>
            <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={prenom}
                onChange={e => setPrenom(e.target.value)}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onLogin(prenom)}
            >
                Valider
            </button>
        </div>
    )
}

export default LoginScreen