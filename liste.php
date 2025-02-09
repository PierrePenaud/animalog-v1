<?php

// Vérification de l'action pour retourner la liste des noms
if (isset($_GET['action']) && $_GET['action'] === 'get_names') {
    $file = fopen("resultats.txt", "r");
    $names = [];
    $recordSize = 30 + 65 + (65 * 10); // Taille totale d'un enregistrement (à ajuster si nécessaire)

    while (true) {
        $currentPosition = ftell($file); // Obtenir la position actuelle
        $data = fread($file, 30); // Lire les 30 premiers caractères pour le nom

        // Vérifier si la lecture a échoué ou si la fin du fichier est atteinte
        if ($data === false || feof($file)) {
            break;
        }

        $name = trim($data); // Supprimer les espaces inutiles
        if (!empty($name)) {
            $names[] = $name;			
        }

        // Avancer au prochain enregistrement
        fseek($file, $currentPosition + $recordSize, SEEK_SET);
    }

    fclose($file);
  
	sort($names);//classement par ordre alphabétique
    echo json_encode($names);
	
    exit;
}
?>