import GridCell from "./components/GridCell"
import ANIMAUX from './data/animaux'

function App() {
  return (
    <div className="p-8 flex flex-col gap-8">

      <GridCell animal={null}/>
      
      <GridCell animal={ANIMAUX[0]}/>

    </div>
  )
}

export default App