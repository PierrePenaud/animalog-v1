
import LoginScreen from "./screens/LoginScreen";
import { useState } from "react";
import FicheScreen from "./screens/FicheScreen";
import GameScreen from "./screens/GameScreen";

function App() {
  const [ficheChoisie, setFicheChoisie] = useState(null)
  const [joueur, setJoueur] = useState(null)
  

  if (joueur === null) {
    return <LoginScreen onLogin={setJoueur}  />
  }

  if (ficheChoisie === null) {
    return <FicheScreen onFicheChoisie={setFicheChoisie} />
  }

  return <GameScreen fiche={ficheChoisie}/>

}

export default App;
