import { div } from "framer-motion/client"
import TileAnimal from "./components/TileAnimal"
import ANIMAUX from "./data/animaux"

function App() {
  return (
    <div className="p-8 flex gap-4 flex-wrap">
      {ANIMAUX.map(animal => (
        <TileAnimal key={animal.id} animal={animal} />
      ))}
    </div>
  )
}

export default App