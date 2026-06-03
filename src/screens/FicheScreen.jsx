import FICHES, {NIVEAUX} from "../data/fiches"

function FicheScreen ({onFicheChoisie}) {
    const niveauObject = Object.values(NIVEAUX)

    return (

        <div>
            <div className="flex gap-4">
                {niveauObject.map((niveau) => (
                    <div className="flex flex-col">
                        <h2 key={niveau.label}>{niveau.label}</h2>
                        {FICHES.filter(fiche => fiche.niveau.label === niveau.label).map((fiche) => (
                            <div key={fiche.id} onClick={() => onFicheChoisie(fiche)}>Fiche {fiche.id}</div>
                        ))}
                    </div>

                ))}

            </div>
        </div>
    )
}

export default FicheScreen