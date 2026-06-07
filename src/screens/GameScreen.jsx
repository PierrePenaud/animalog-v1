import Grid from "../components/Grid";
import ANIMAUX from "../data/animaux";
import Reserve from "../components/Reserve";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import TileAnimal from "../components/TileAnimal";
import { SOLUTION_MAP } from "../data/fiches";
import Validation from "../components/Validation";
import { useState } from "react";


function GameScreen({ fiche }) {
  const [resultat, setResultat] = useState(null);
  const [grille, setGrille] = useState(Array(9).fill(null));
  const [animalActif, setAnimalActif] = useState(null);
  const animauxDisponibles = ANIMAUX.filter(
    (animal) => !grille.includes(animal.id) && animal.id !== animalActif?.id,
  );

  function handleDragStart(event) {
    console.log("drag start", event);
    const animal = ANIMAUX.find((a) => a.id === event.active.id);
    const { active, over } = event;
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
    if (indexOrigine !== -1) nouvelleGrille[indexOrigine] = null;
    nouvelleGrille[over.id] = active.id;
    setGrille(nouvelleGrille);
    setAnimalActif(null);
  }

  function onValider() {
    const solutionTableau = fiche.solution.split("");
    const solutionIds = solutionTableau.map((chiffre) => SOLUTION_MAP[chiffre]);
    const estCorrect = solutionIds.join("") === grille.join("");
    setResultat(estCorrect);
  }

  return (
    <div className="p-8 flex flex-col gap-8">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <DragOverlay>
          {animalActif ? <TileAnimal animal={animalActif} /> : null}
        </DragOverlay>
        <Grid grille={grille} />
        <Reserve animaux={animauxDisponibles} />
        <Validation
          grille={grille}
          solution={fiche.solution}
          onValider={onValider}
        />
        {resultat === true && <div>Bravo !</div>}
        {resultat === false && <div>Essaie encore !</div>}
      </DndContext>
    </div>
  );
}

export default GameScreen;
