import FICHES, {NIVEAUX} from "../data/fiches"

function FicheScreen ({onFicheChoisie}) {
    const niveauObject = Object.values(NIVEAUX)

    return (

        <div>
            <div className="flex gap-4">
                {niveauObject.map((niveau) => (
                    <h2 key={niveau.label}>{niveau.label}</h2>
                ))}

            </div>
        </div>
    )
}

export default FicheScreen