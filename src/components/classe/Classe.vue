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
	<div class="p-5 m-5 font-monospace">
		<h1 class="display-5 fw-bold">Classes</h1>
		<table class="shadow-lg table table-hover align-middle mb-0 bg-white">
			<thead class="bg-light">
				<tr>
					<th class="fw-bold">Nom</th>
					<th class="fw-bold">Effectif</th>
					<th class="fw-bold">Département</th>
					<th class="fw-bold">Niveau</th>
					<th class="fw-bold">Opération</th>
				</tr>
			</thead>
			<tbody>
				<tr class="table-primary">
					<td>Example</td>
					<td>Example</td>
					<td>Example</td>
					<td>Example</td>
					<td>
						<img style="width: 20px; height: 20px" @click="formDisplay('modifier',am)" src="./images/pencil.svg"/>
						<img style="width: 20px; height: 20px" @click="deleteClasse(am.id)" src="./images/cross.svg"/>
					</td>
				</tr>
				<tr class="table-primary">
					<td>Example</td>
					<td>Example</td>
					<td>Example</td>
					<td>Example</td>
					<td>
						<img style="width: 20px; height: 20px" @click="formDisplay('modifier',am)" src="./images/pencil.svg"/>
						<img style="width: 20px; height: 20px" @click="deleteClasse(am.id)" src="./images/cross.svg"/>
					</td>
				</tr>
				<tr v-for="(am, index) in classe" :key="index" class="table-primary">
					<td><p class="fw-bold mb-1">{{ am.nom }}</p></td>
					<td><p class="fw-normal mb-1">{{ am.effectif }}</p></td>
					<td><p class="fw-normal mb-1">{{ am.departement }}</p></td>
					<td><p class="fw-normal mb-1">{{ am.niveau }}</p></td>
					<td>
						<img style="width: 20px; height: 20px" @click="formDisplay('modifier',am)" src="./images/pencil.svg"/>
						<img style="width: 20px; height: 20px" @click="deleteClasse(am.id)" src="./images/cross.svg"/>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
    <div class="text-center">
        <a class="shadow-lg font-monospace fw-bold btn btn-primary btn-lg hidden-sm hidden-xs" @click="formDisplay('ajouter',0)" >Ajouter</a>
    </div>
    <ClassForm @added="getClasse" ref="classForm"/>

	<footer class="shadow bg-light text-center text-lg-start font-monospace fw-bold fixed-bottom">
		<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">© 2022 Copyright: <a class="text-dark" href="#">TheSavoir</a></div>
	</footer>
</template>
<style src="./classe.css">
</style>
<script src = "./classe.js">
</script>
