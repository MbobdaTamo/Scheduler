<template>
    <div class="enseignant">
        <div class="ensOption">
            <div class="ensElement ensTH">
                <span>Nom</span>
                <span>Prénom</span>
                <span>Grade</span>
                <span>Département</span>
                <span class="ensTHL"> Opération</span>
            </div>
            <div v-for="(am, index) in enseignant" :key="index" class="ensElement">
                <span>{{ am.nom }}</span>
                <span>{{ am.prenom }}</span>
                <span>{{ am.grade }}</span>
                <span>{{ am.departement }}</span>
                <span>
                    <img @click="formDisplay('modifier',am)" src="./images/pencil.svg"/>
                    <img @click="deleteEnseignant(am.id)" src="./images/cross.svg"/>
                </span>
            </div>
        </div>
        <div>
            <a class="boutton" @click="formDisplay('ajouter',0)" >Ajouter</a>
        </div>
        <EnsForm @added="getEnseignant" ref="ensForm"/>
    </div>
</template>
<style src="./enseignant.css">
</style>
<script src = "./enseignant.js">
</script>
