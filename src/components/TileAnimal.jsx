function TileAnimal({ animal }) {
  return (
    <div
      className="w-16 h-16 rounded-2xl border-2 border-gray-200 
                    shadow-md flex items-center justify-center 
                    bg-white cursor-grab"
    >
      <img
        src={animal.image}
        alt={`${animal.type} ${animal.couleur}`}
        className="w-12 h-12 object-contain"
      />
    </div>
  );
}

export default TileAnimal
