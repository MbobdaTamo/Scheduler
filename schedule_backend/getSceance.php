<?php

// getting datas from post
$rp = json_decode(file_get_contents('php://input'), true);

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;

//--------------------- vérifions si le compte existe déja -----------------------
$req = $bdd->prepare( <<<EOT
	SELECT Sceance.id,Sceance.nom as nom,period,transition,description,salle, classe,enseignant,annee,semestre,jour,heure_debut,heure_fin,
	Classe.nom as classeNom, Amphi.nom as salleNom, Enseignant.nom as enseignantNom
	FROM Sceance, Classe, Amphi, Enseignant WHERE period = ? AND salle REGEXP ? AND classe REGEXP ? AND enseignant REGEXP ? AND annee = ? AND semestre = ? AND jour = ? AND Classe.id = classe AND Amphi.id = salle AND Enseignant.id = enseignant ORDER BY heure_debut
EOT
);
$req->execute(array($rp['period'],$rp['salle'], $rp['classe'],$rp['enseignant'],$rp['annee'],$rp['semestre'],$rp['jour']));
$data = Array();
while ($donnees = $req->fetch(PDO::FETCH_ASSOC))
{
  $data[]= $donnees;
}
echo(json_encode($data));

$req->closeCursor();
?>