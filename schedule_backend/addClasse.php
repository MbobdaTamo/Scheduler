<?php

// getting datas from post
$rp = json_decode(file_get_contents('php://input'), true);

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;
	//------------------ inscription du compte dans la bd -------------------------------------------------
	if($rp['role'] == 'Ajouter') {
		$req = $bdd->prepare('INSERT INTO Classe(nom,effectif,departement,niveau)
		VALUES (?,?,?,?)');
		$req->execute(array($rp['nom'],$rp['effectif'],$rp['departement'],$rp['niveau'])); 
	}
	else if($rp['role'] == 'Modifier') {
		$req = $bdd->prepare('UPDATE Classe SET nom = ?, effectif = ?, departement = ?, niveau = ? WHERE id = ?');
		$req->execute(array($rp['nom'],$rp['effectif'],$rp['departement'],$rp['niveau'],$rp['id']));
	}
	else {
		$req = $bdd->prepare('DELETE FROM Classe WHERE id = ?');
		$req->execute(array($rp['id']));
	}

$req->closeCursor();
?>