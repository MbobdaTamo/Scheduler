<?php

// getting datas from post
$rp = json_decode(file_get_contents('php://input'), true);

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;
	//------------------ inscription du compte dans la bd -------------------------------------------------
	if($rp['role'] == 'Ajouter') {
		$req = $bdd->prepare('INSERT INTO Enseignant(nom,prenom,grade,departement)
		VALUES (?,?,?,?)');
		$req->execute(array($rp['nom'],$rp['prenom'],$rp['grade'],$rp['departement'])); 
	}
	else if($rp['role'] == 'Modifier') {
		$req = $bdd->prepare('UPDATE Enseignant SET nom = ?, prenom = ?,grade = ?, departement = ? WHERE id = ?');
		$req->execute(array($rp['nom'],$rp['prenom'],$rp['grade'],$rp['departement'],$rp['id']));
	}
	else {
		$req = $bdd->prepare('DELETE FROM Enseignant WHERE id = ?');
		$req->execute(array($rp['id']));
	}

$req->closeCursor();
?>