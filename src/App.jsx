import Grid from "./components/Grid"
import ANIMAUX from "./data/animaux"
import Reserve from "./components/Reserve"
import { useState } from "react"
import { DndContext } from "@dnd-kit/core"


function App() {
  const [grille, setGrille] = useState(Array(9).fill(null))
  const animauxDisponibles = ANIMAUX.filter(animal => !grille.includes(animal.id))

  function handleDragEnd(event) {
    console.log("drag end", event)
    const { active, over } = event
    if (!over) return  // ← ajoute cette ligne
    const nouvelleGrille = [...grille]
    nouvelleGrille[over.id] = active.id
    setGrille(nouvelleGrille)
  }

  return (
    <div className="p-8 flex flex-col gap-8">
      <DndContext onDragEnd={handleDragEnd}>
        <Grid grille={grille}/>
        <Reserve animaux={animauxDisponibles}/>
      </DndContext>
      

    </div>
  )
}

export default App