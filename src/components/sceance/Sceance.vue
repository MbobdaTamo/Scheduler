<template>
	<nav class="shadow navbar navbar-expand-lg bg-light fixed-top">
		<div class="container-fluid">
			<a class="navbar-brand font-monospace fw-bold" href="#">Scheduler</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
				<div><a href="salle" class="btn btn-primary font-monospace fw-bold" tabindex="-1" role="button" aria-disabled="true">Guide</a></div>
			</div>
		</div>
	</nav>
    <div class="pt-3 ps-0">
		<div class="text-center shadow me-5 ms-5 mb-4">
			<form class="p-5 m-5 pt-3 mb-0 row row-cols-lg-auto form-outline sceanceSelect sceanceSelect2 font-monospace">
				<span>Année: </span>
				<select class="bg-primary text-white shadow" @change="getSceance" v-model="annee">
					<option v-for="(year, index) in years" :key="index">{{ year }}</option>
				</select>
				<select class="bg-primary text-white shadow" change="getSceance" v-model="semestre">
					<option>SEMESTRE1</option>
					<option>SEMESTRE2</option>
				</select>
				<span>Jour: </span>
				<select class="bg-primary text-white shadow" @change="getSceance" style="width: 80px" v-model="jour">
					<option v-for="(jour, index) in jours" :key="index">{{ jour }}</option>
				</select>
				<span>Trier par: </span>
				<select class="bg-primary text-white shadow" @change="trieSelect" v-model="triePar">
					<option  v-for="(triePar, index) in triePars" :key="index">{{ triePar }} </option>
				</select>
				<span>:</span>
				<select class="bg-primary text-white shadow" v-model="current">
					<option @click="currentSelect('.+')">Tout </option>
					<option @click="currentSelect(current.id)" v-for="(current, index) in currents" :key="index">{{ current.nom }}</option>
				</select>
			</form>
		</div>
        <div class="shadow font-monospace text-center me-5 ms-5 mb-0">
			<div>
				<span class="fw-bold">Ajouter Scéance</span>
				<form class="p-5 m-5 pt-3 mb-0 row row-cols-lg-auto form-outline sceanceSelect sceanceSelect2 font-monospace">
					<span>classe:</span>
					<select class="bg-primary text-white shadow" v-model="classe">
						<option @click="classSelect(0,'Toutes')">Toutes</option>
						<option @click="classSelect(classe.id,classe.nom+' ('+classe.effectif+ ' places)')" v-for="(classe, index) in classes" :key="index">{{ classe.nom }} ({{ classe.effectif }} places)</option>
					</select>
					<span>Salle:</span>
					<select class="bg-primary text-white shadow" v-model="salle">
						<option @click="salleSelect(0,'Toutes')">Toutes</option>
						<option @click="salleSelect(salle.id,salle.nom+ ' ('+salle.capacite+ ' places)')" v-for="(salle, index) in salles" :key="index">{{ salle.nom }} ({{ salle.capacite }} places)</option>
					</select>
					<span>Enseignant:</span>
					<select class="bg-primary text-white shadow" v-model="enseignant" >
						<option @click="ensSelect(0,'Tous')">Tous</option>
						<option @click="ensSelect(enseignant.id,enseignant.nom)" v-for="(enseignant, index) in enseignants" :key="index" >{{ enseignant.nom }}</option>
					</select>
				</form>
			</div>
            <div class="text-center pb-3">
                <a class="bg-primary text-white btn-lg fw-bold" @click="getSceance1('ajouter',0)" >Ajouter</a>
            </div>
        </div>
    </div>

		<div class="font-monospace p-5 m-5 mt-1">
			<h1 class="display-5 fw-bold">Courses</h1>
			<table class="shadow-lg table table-hover align-middle mb-0 bg-white">
				<thead class="bg-light">
					<tr>
						<th class="fw-bold">Nom</th>
						<th class="fw-bold">Description</th>
						<th class="fw-bold">Heure du début</th>
						<th class="fw-bold">Heure de la fin</th>
						<th class="fw-bold">Classe</th>
						<th class="fw-bold">Salle</th>
						<th class="fw-bold">Enseignant</th>
						<th class="fw-bold">Opération</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(am, index) in sceance" :key="index" class="table-primary">
						<td><p class="fw-bold mb-1">{{ am.nom }}</p></td>
						<td><p class="fw-normal mb-1">{{ am.description }}</p></td>
						<td><p class="fw-normal mb-1">{{ toHour(am.heure_fin) }}</p></td>
						<td><p class="fw-normal mb-1">{{ toHour(am.heure_debut) }}</p></td>
						<td><p class="fw-normal mb-1">{{ am.classeNom }}</p></td>
						<td><p class="fw-normal mb-1">{{ am.salleNom }}</p></td>
						<td><p class="fw-normal mb-1">{{ am.enseignantNom }}</p></td>
						<td>
							<img style="width: 20px; height: 20px" @click="formDisplay('modifier',am)" src="./images/pencil.svg"/>
							<img style="width: 20px; height: 20px" @click="deleteSceance(am.id)" src="./images/cross.svg"/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
        <SceanceForm @added="getSceance" @onPublish="onPublish" ref="sceanceForm"/>
        <YAlert ref="yAlert" type = "danger"/>

	<footer class="shadow bg-light text-center text-lg-start font-monospace fw-bold fixed-bottom">
		<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">© 2022 Copyright: <a class="text-dark" href="#">TheSavoir</a></div>
	</footer>
</template>
<style src="./sceance.css">
</style>
<script src = "./sceance.js">
</script>
