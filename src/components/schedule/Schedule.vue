<template>
    <div class="schedule">
        <div class="sceanceSelect">
            <span>Année:</span>
                <select @change="getSceance" v-model="annee"><option v-for="(year, index) in years" :key="index">{{ year }}</option></select>
                <select @change="getSceance" v-model="semestre"><option>SEMESTRE1</option><option>SEMESTRE2</option></select>
        </div>
         <div class="sceanceSelect sceanceSelect2">
            <span>Trier par:</span>
            <select @change="trieSelect" v-model="triePar">
                <option  v-for="(triePar, index) in triePars" :key="index">{{ triePar }} </option>
            </select>
            <span>:</span>
            <select v-model="current">
                <option @click="currentSelect(current.id)" v-for="(current, index) in currents" :key="index">{{ current.nom }}</option>
            </select>
        </div>
        <section id="toPrint" style="width:1330px; text-align:center">
            <h2>{{ current }} planning  {{annee}}/{{parseInt(annee)+1}}</h2>
            <div class="scheduleMain">
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
        <div @click="print" class="scPrintButton">PRINT</div>
    </div>
</template>
<style src="./schedule.css">
</style>
<script src = "./schedule.js">
</script>
