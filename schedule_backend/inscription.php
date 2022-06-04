<?php

session_id(2022);
session_start();

// getting datas from post
$rp = json_decode(file_get_contents('php://input'), true);

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;

//--------------------- vérifions si le compte existe déja -----------------------
$req = $bdd->prepare('SELECT id FROM User WHERE username = ? AND password = ?');
$req->execute(array($rp['username'],$rp['password']));
$result = $req->fetch();
if(!$result) {
	//------------------ inscription du compte dans la bd -------------------------------------------------
	$req = $bdd->prepare('INSERT INTO User(username,email,password,date_inscription)
	VALUES (?,?,?,NOW())');
	$req->execute(array($rp['username'],$rp['email'],$rp['password']));

	//-------- récupérons l'identifiant du compte inscrit -------------------------------------------
	$req = $bdd->prepare('SELECT id FROM User WHERE username = ? AND password = ?');
	$req->execute(array($rp['username'],$rp['password']));
	$result = $req->fetch(); 
	echo json_encode(true);
	/* $bdd->query('select last_insert_id()');
	$result = $req->fetch();
	echo json_encode($result['last_insert_id()']); */
}
else {
	// inscription
	echo json_encode(false);
}


$req->closeCursor();
?>