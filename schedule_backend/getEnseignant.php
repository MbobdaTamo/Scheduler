<?php

// getting datas from post
$rp = json_decode(file_get_contents('php://input'), true);

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;

//--------------------- vérifions si le compte existe déja -----------------------
$req = $bdd->prepare('SELECT * FROM Enseignant');
$req->execute(array());
$data = Array();
while ($donnees = $req->fetch(PDO::FETCH_ASSOC))
{
  $data[]= $donnees;
}
echo(json_encode($data));

$req->closeCursor();
?>