import Grid from "./components/Grid"
import ANIMAUX from "./data/animaux"
import Reserve from "./components/Reserve"
import { useState } from "react"

const [grille, setGrille] = useState(Array(9).fill(null))

function App() {
  return (
    <div className="p-8 flex flex-col gap-8">

      <Grid/>
      <Reserve animaux={ANIMAUX}/>
      

    </div>
  )
}

export default App