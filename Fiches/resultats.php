<?php

// Définition des constantes
define("RECORD_SIZE", 30 + 65 + (65 * 10)); // Taille fixe d'un enregistrement
define("FILE_NAME", "resultats.txt");

// Fonction pour écrire ou mettre à jour un enregistrement
function updateRecord($nom, $indexFiche, $score, $date) {	

    // Ouverture du fichier en mode lecture/écriture
    $file = fopen(FILE_NAME, "c+");	
		 
	// Recherche ou création de l'enregistrement
	$position = null;
	while (true) {
    $currentPosition = ftell($file);
    $data = fread($file, 30); // Lire les 30 premiers caractères (nom)
    
    // Si la lecture échoue ou que la fin du fichier est atteinte
    if ($data === false || feof($file)) {
        break;
    }

    // Vérifier si les 30 caractères lus correspondent au nom
    if (trim($data) === $nom) {
        $position = $currentPosition;
        break;
    }

    // Passer à l'enregistrement suivant
    fseek($file, RECORD_SIZE - 30, SEEK_CUR); // Aller à la position suivante
}

	
    // Si l'enregistrement n'existe pas, ajout à la fin du fichier
    if ($position === null) {
        $position = ftell($file);
        fseek($file, 0, SEEK_END);
        fwrite($file, str_pad($nom, 30)); // Ajouter le nom
        fwrite($file, str_repeat("X", 65)); // Initialiser les scores à "0"
        fwrite($file, str_repeat(str_pad("D", 10), 65)); // Initialiser les dates vides
		$score="X";
		$date="D         ";
    }

    // Mettre à jour le score et la date de la fiche
    $scorePosition = $position + 30 + ($indexFiche - 1); // Position du score
    $datePosition = $position + 30 + 65 + (($indexFiche - 1) * 10); // Position de la date

    fseek($file, $scorePosition, SEEK_SET);
    fwrite($file, $score); // Écrire le score

    fseek($file, $datePosition, SEEK_SET);
    fwrite($file, str_pad($date, 10)); // Écrire la date (10 caractères)

    // Fermeture du fichier
    fclose($file);
}

// Gestion de la requête POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nom = $_POST["nom"] ?? '';
    $indexFiche = intval($_POST["indexFiche"] ?? 0);
    $score = $_POST["score"] ?? '';
    $date = $_POST["date"] ?? '';


    updateRecord($nom, $indexFiche, $score, $date);

    //echo json_encode(["status" => "success", "message" => "Enregistrement mis à jour."]);
}

?>
