function Validation ({grille, solution, onValider}) {
    return (
        <button onClick={() => onValider(solution)}>Valider</button>
    )
}

export default Validation