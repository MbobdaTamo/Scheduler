<template>
    <div class="sceance">
        <div class="sceanceSelect">
            <span>Année:</span>
            <select @change="getSceance" v-model="annee"><option v-for="(year, index) in years" :key="index">{{ year }}</option></select>
            <select @change="getSceance" v-model="semestre"><option>SEMESTRE1</option><option>SEMESTRE2</option></select>
            <span>Jour:</span>
            <select @change="getSceance" v-model="jour"><option v-for="(jour, index) in jours" :key="index">{{ jour }}</option></select>
            <span>Trier par:</span>
            <select @change="trieSelect" v-model="triePar">
                <option  v-for="(triePar, index) in triePars" :key="index">{{ triePar }} </option>
            </select>
            <span>:</span>
            <select v-model="current">
                <option @click="currentSelect('.+')">Tout </option>
                <option @click="currentSelect(current.id)" v-for="(current, index) in currents" :key="index">{{ current.nom }}</option>
            </select>
        </div>
        <div class="sceanceAdd">
            <span>Ajouter Scéance</span>
            <div class="sceanceSelect sceanceSelect2">
                <span>classe:</span>
                <select v-model="classe">
                    <option @click="classSelect(0,'Toutes')">Toutes</option>
                    <option @click="classSelect(classe.id,classe.nom+' ('+classe.effectif+ ' places)')" v-for="(classe, index) in classes" :key="index">{{ classe.nom }} ({{ classe.effectif }} places)</option>
                </select>
                <span>Salle:</span>
                <select v-model="salle">
                    <option @click="salleSelect(0,'Toutes')">Toutes</option>
                    <option @click="salleSelect(salle.id,salle.nom+ ' ('+salle.capacite+ ' places)')" v-for="(salle, index) in salles" :key="index">{{ salle.nom }} ({{ salle.capacite }} places)</option>
                </select>
                <span>Enseignant:</span>
                <select v-model="enseignant" >
                    <option @click="ensSelect(0,'Tous')">Tous</option>
                    <option @click="ensSelect(enseignant.id,enseignant.nom)" v-for="(enseignant, index) in enseignants" :key="index" >{{ enseignant.nom }}</option>
                </select>
            </div>
            <div class="sceanceButton">
                <a class="boutton" @click="getSceance1('ajouter',0)" >Ajouter</a>
            </div>
        </div>
        <div class="sceanceOption">
            <div class="sceanceElement sceanceTH">
                <span>nom</span>
                <span>description</span>
                <span>Heure du début</span>
                <span>Heure de la fin</span>
                <span>Classe</span>
                <span>Salle</span>
                <span>Enseignant</span>
                <span class="sceanceTHL"> Opération</span>
            </div>
            <div v-for="(am, index) in sceance" :key="index" class="sceanceElement">
                <span>{{ am.nom }}</span>
                <span>{{ am.description }}</span>
                <span>{{ toHour(am.heure_debut)}}</span>
                <span>{{ toHour(am.heure_fin) }}</span>
                <span>{{ am.classe }}</span>
                <span>{{ am.salle }}</span>
                <span>{{ am.enseignant }}</span>
                <span>
                    <img @click="formDisplay('modifier',am,0)" src="./images/pencil.svg"/>
                    <img @click="deleteSceance(am.id)" src="./images/cross.svg"/>
                </span>
            </div>
        </div>
        <SceanceForm @added="getSceance" @onPublish="onPublish" ref="sceanceForm"/>
        <YAlert ref="yAlert" type = "danger"/>
    </div>
</template>
<style src="./sceance.css">
</style>
<script src = "./sceance.js">
</script>
