import Grid from "./components/Grid"
import ANIMAUX from "./data/animaux"
import Reserve from "./components/Reserve"
import { useState } from "react"


function App() {
  const [grille, setGrille] = useState(Array(9).fill(null))
  const animauxDisponibles = ANIMAUX.filter(animal => !grille.includes(animal.id))

  return (
    <div className="p-8 flex flex-col gap-8">

      <Grid grille={grille}/>
      <Reserve animaux={animauxDisponibles}/>
      

    </div>
  )
}

export default App