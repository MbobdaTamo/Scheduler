<?php

// getting datas from post
$rp = json_decode(file_get_contents('php://input'), true);

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;
	//------------------ inscription du compte dans la bd -------------------------------------------------
	if($rp['role'] == 'Ajouter') {
		$req = $bdd->prepare('INSERT INTO Sceance(nom, period,transition,description,salle, classe,enseignant,annee,semestre,jour, heure_debut,heure_fin)
		VALUES (?,?,?,?,?,?,?,?,?,?,?,?)');
		$req->execute(array($rp['nom'], $rp['period'],$rp['transition'],$rp['description'],$rp['salle'], $rp['classe'],$rp['enseignant'],$rp['annee'],$rp['semestre'],$rp['jour'],$rp['heure_debut'],$rp['heure_fin'])); 
		echo json_encode($rp['role']);
	}
	else if($rp['role'] == 'Modifier') {
		$req = $bdd->prepare('UPDATE Sceance SET nom = ?, transition = ?, description = ?, heure_debut = ?, heure_fin = ? WHERE id = ?');
		$req->execute(array($rp['nom'],$rp['transition'],$rp['description'],$rp['heure_debut'],$rp['heure_fin'],$rp['id']));
	}
	else {
		$req = $bdd->prepare('DELETE FROM Sceance WHERE id = ?');
		$req->execute(array($rp['id']));
	}

$req->closeCursor();
?>