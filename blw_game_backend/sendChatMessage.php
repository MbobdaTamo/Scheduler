<?php

session_id(2022);
session_start();

// getting datas from post
$rp = json_decode(file_get_contents('php://input'), true);
$user = $_SESSION['userDatas'];

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;

//------------------ send message-------------------------------------------------

$req = $bdd->prepare('INSERT INTO Message(user,message,date)
VALUES (?,?,NOW())');
$req->execute(array($user['id'],$rp['message']));


$req->closeCursor();
?>