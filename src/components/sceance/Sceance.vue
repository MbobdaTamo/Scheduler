<template>
    <div class="sceance">
        <div class="sceanceSelect">
            <span>Année:</span>
            <select v-model="annee"><option v-for="(year, index) in years" :key="index">{{ year }}</option></select>
            <select v-model="semestre"><option>SEMESTRE1</option><option>SEMESTRE2</option></select>
            <span>Jour:</span>
            <select v-model="jour"><option v-for="(jour, index) in jours" :key="index">{{ jour }}</option></select>
            <span>classe:</span>
            <select v-model="classe">
                <option>Toutes</option>
                <option v-for="(classe, index) in classes" :key="index">{{ classe.nom }} ({{ classe.effectif }} places)</option>
            </select>
            <span>Salle:</span>
            <select v-model="salle">
                <option>Toutes</option>
                <option v-for="(salle, index) in salles" :key="index">{{ salle.nom }} ({{ salle.capacite }} places)</option>
            </select>
            <span>Enseignant:</span>
            <select v-model="enseignant" >
                <option>Tous</option>
                <option v-for="(enseignant, index) in enseignants" :key="index">{{ enseignant.nom }}</option>
            </select>
        </div>
        <div class="sceanceOption">
            <div class="sceanceElement sceanceTH">
                <span>nom</span>
                <span>description</span>
                <span>Jour</span>
                <span>Heure du début</span>
                <span>Durée</span>
                <span class="sceanceTHL"> Opération</span>
            </div>
            <div v-for="(am, index) in classe" :key="index" class="sceanceElement">
                <span>{{ am.nom }}</span>
                <span>{{ am.effectif }}</span>
                <span>{{ am.departement }}</span>
                <span>{{ am.niveau }}</span>
                <span>{{ am.niveau }}</span>
                <span>{{ am.niveau }}</span>
                <span>
                    <img @click="formDisplay('modifier',am)" src="./images/pencil.svg"/>
                    <img @click="deleteClasse(am.id)" src="./images/cross.svg"/>
                </span>
            </div>
        </div>
        <div>
            <a class="boutton" @click="formDisplay('ajouter',0)" >Ajouter</a>
        </div>
        <SceanceForm @added="getSceance" ref="sceanceForm"/>
    </div>
</template>
<style src="./sceance.css">
</style>
<script src = "./sceance.js">
</script>
