<?php

// getting datas from post
$rp = json_decode(file_get_contents('php://input'), true);

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;
	//------------------ inscription du compte dans la bd -------------------------------------------------
	if($rp['role'] == 'Ajouter') {
		$req = $bdd->prepare('INSERT INTO Amphi(nom,capacite)
		VALUES (?,?)');
		$req->execute(array($rp['nom'],$rp['capacite'])); 
	}
	else if($rp['role'] == 'Modifier') {
		$req = $bdd->prepare('UPDATE Amphi SET nom = ?, capacite = ? WHERE id = ?');
		$req->execute(array($rp['nom'],$rp['capacite'],$rp['id']));
	}
	else {
		$req = $bdd->prepare('DELETE FROM Amphi WHERE id = ?');
		$req->execute(array($rp['id']));
	}

$req->closeCursor();
?>