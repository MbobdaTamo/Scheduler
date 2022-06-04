<?php

session_id(2022);
session_start();

// getting datas from post
$rp = json_decode(file_get_contents('php://input'), true);
$_SESSION['login'] = $rp;

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;

//--------------------- vérifions si le compte existe déja -----------------------

$req = $bdd->prepare('SELECT * FROM User WHERE username = ? AND password = ?');
$req->execute(array($rp['username'],$rp['password']));
$result = $req->fetch(PDO::FETCH_ASSOC);

if($result) {
	$_SESSION['userDatas'] = $result;
	echo json_encode($result);
}
else {
	echo json_encode(false);
}


$req->closeCursor();
?>