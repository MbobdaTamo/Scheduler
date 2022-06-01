<template>
    <div class="enseignant">
        <div class="ensOption">
            <div class="ensElement ensTH">
                <span>Nom</span>
                <span>Effectif</span>
                <span>Département</span>
                <span>Niveau</span>
                <span class="ensTHL"> Opération</span>
            </div>
            <div v-for="(am, index) in classe" :key="index" class="ensElement">
                <span>{{ am.nom }}</span>
                <span>{{ am.effectif }}</span>
                <span>{{ am.departement }}</span>
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
        <ClassForm @added="getClasse" ref="classForm"/>
    </div>
</template>
<style src="./classe.css">
</style>
<script src = "./classe.js">
</script>
