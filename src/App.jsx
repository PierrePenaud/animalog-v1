import Grid from "./components/Grid";
import ANIMAUX from "./data/animaux";
import Reserve from "./components/Reserve";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import TileAnimal from "./components/TileAnimal";
import LoginScreen from "./screens/LoginScreen";
import { useState } from "react";

function App() {
  const [joueur, setJoueur] = useState(null)
  const [grille, setGrille] = useState(Array(9).fill(null));
  const [animalActif, setAnimalActif] = useState(null);
  const animauxDisponibles = ANIMAUX.filter(
    (animal) => !grille.includes(animal.id) && animal.id !== animalActif?.id,
  );
  
  
  if (joueur === null) {
    return <LoginScreen onLogin={setJoueur}  />
  } 

  function handleDragStart(event) {
    console.log("drag start", event);
    const animal = ANIMAUX.find((a) => a.id === event.active.id);
    const { active, over } = event
    const indexOrigine = grille.indexOf(active.id);
    const nouvelleGrille = [...grille];
    if (indexOrigine !== -1) nouvelleGrille[indexOrigine] = null;
    setGrille(nouvelleGrille);
    setAnimalActif(animal);
  }

  function handleDragEnd(event) {
    console.log("drag end", event);
    const { active, over } = event;
    const indexOrigine = grille.indexOf(active.id);
    if (!over) return setAnimalActif(null);
    const nouvelleGrille = [...grille];
    if (indexOrigine !== -1) nouvelleGrille[indexOrigine] = null
    nouvelleGrille[over.id] = active.id;
    setGrille(nouvelleGrille);
    setAnimalActif(null);
  }

  return (
    <div className="p-8 flex flex-col gap-8">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <DragOverlay>
          {animalActif ? <TileAnimal animal={animalActif} /> : null}
        </DragOverlay>
        <Grid grille={grille} />
        <Reserve animaux={animauxDisponibles} />
      </DndContext>
    </div>
  );
}

export default App;
