<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['nom'])) {
    $nomRecherche = trim($_POST['nom']);
    $file = fopen("resultats.txt", "r");
    $recordSize = 30 + 65 + (65 * 10); // Taille totale d'un enregistrement
    $scores = [];
    $dates = [];

    while ($file && !feof($file)) {
        $currentPosition = ftell($file);
        $data = fread($file, 30); // Lire les 30 premiers caractères pour le nom

        // Vérifier si la lecture a échoué ou si la fin du fichier est atteinte
        if ($data === false || feof($file)) {
            break;
        }

        $name = trim($data);
        if ($name === $nomRecherche) {
            // Trouver les scores (65 caractères après le nom)
            fseek($file, $currentPosition + 30, SEEK_SET);
            $scoresRaw = fread($file, 65); // Lire les 65 caractères des scores
            $scores = str_split($scoresRaw); // Diviser les scores en un tableau de 65 éléments

            // Trouver les dates (65 x 10 caractères après les scores)
            $datesRaw = fread($file, 65 * 10); // Lire les 65 x 10 caractères des dates
            for ($i = 0; $i < 65; $i++) {
                $dates[] = substr($datesRaw, $i * 10, 10); // Extraire chaque date
            }

            break; // Sortir de la boucle une fois le nom trouvé
        }

        // Avancer au prochain enregistrement
        fseek($file, $currentPosition + $recordSize, SEEK_SET);
    }

    fclose($file);

    // Retourner les données en JSON
    header('Content-Type: application/json');
    echo json_encode([
        'scores' => $scores,
        'dates' => $dates
    ]);
    exit;
}

?>
