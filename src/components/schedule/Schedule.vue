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
    <div class="schedule font-monospace fw-bold mt-5 pt-5 mb-5 pb-5">
		<div class="me-5 ps-5 row row-cols-lg-auto mb-3">
			<div class="sceanceSelect">
				<span>Année:</span>
					<select class="bg-primary text-white shadow" @change="getSceance" v-model="annee"><option v-for="(year, index) in years" :key="index">{{ year }}</option></select>
					<select class="bg-primary text-white shadow" @change="getSceance" v-model="semestre"><option>SEMESTRE1</option><option>SEMESTRE2</option></select>
			</div>
			<div class="sceanceSelect sceanceSelect2">
				<span>Trier par:</span>
				<select class="bg-primary text-white shadow" @change="trieSelect" v-model="triePar">
					<option  v-for="(triePar, index) in triePars" :key="index">{{ triePar }} </option>
					<option  v-for="(triePar, index) in triePars" :key="index">{{ triePar }} </option>
				</select>
				<span>:</span>
				<select class="bg-primary text-white shadow" v-model="current">
					<option @click="currentSelect(current.id)" v-for="(current, index) in currents" :key="index">{{ current.nom }}</option>
				</select>
			</div>
		</div>
        <section id="toPrint" class="m-5 p-5 mt-0 mb-0 pb-0 pt-0">
            <h2 class="display-3">{{ current }} Planning  {{annee}}/{{parseInt(annee)+1}}</h2>
            <div class="scheduleMain shadow-lg">
                <div class="scDays">
                    <div id="scVoidDay"><span></span></div>
                    <div v-for="(day, index) in days" :key="index"><span>{{ day }}</span></div>
                </div>
                <div class="scHours">
                    <div  v-for="(hour, index) in hours" :key="index">{{hour}}h</div>
                </div>
                <BlueTextBox v-for="(sceance, index) in sceance" :key="index" 
                    :nom="sceance.nom"
                    :classe="sceance.classeNom"
                    :enseignant="sceance.enseignantNom"
                    :salle="sceance.salleNom"
                    :debut="toHour(sceance.heure_debut)"
                    :fin="toHour(sceance.heure_fin)"
                    :positionX="jourToX[sceance.jour]"
                    :positionY="sceance.heure_debut/60-7"
                    :height ="(sceance.heure_fin - sceance.heure_debut)/60"
                />
            </div>
        </section>
        <div @click="print" class="shadow text-white mt-5 me-5 bg-info scPrintButton">PRINT</div>
    </div>
	<footer class="shadow bg-light text-center text-lg-start font-monospace fw-bold fixed-bottom">
		<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">© 2022 Copyright: <a class="text-dark" href="#">TheSavoir</a></div>
	</footer>
</template>
<style src="./schedule.css">
</style>
<script src = "./schedule.js">
</script>
