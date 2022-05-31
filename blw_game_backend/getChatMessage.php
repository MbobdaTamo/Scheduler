<?php
// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;

//--------------------- get messages -----------------------
$req = $bdd->query('SELECT username, message, date FROM User, Message
WHERE User.id = Message.user');
$data = Array() ;
while ($donnees = $req->fetch(PDO::FETCH_ASSOC))
{
  $data[] = $donnees;
}
echo(json_encode($data));

$req->closeCursor();
?>