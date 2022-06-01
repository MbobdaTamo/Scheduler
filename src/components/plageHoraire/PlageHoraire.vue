<template>
    <div class="plagehoraire">
        <div class="plhSelect">
            <span>Année:</span>
            <select><option v-for="(year, index) in years" :key="index">{{ year }}</option></select>
            <select><option>SEMESTRE1</option><option>SEMESTRE2</option></select>
        </div>
        <div class="plhOption">
            <div class="plhElement plhTH">
                <span>Jour</span>
                <span>Heure du début</span>
                <span>Durée</span>
                <span class="plhTHL"> Opération</span>
            </div>
            <div v-for="(am, index) in classe" :key="index" class="plhElement">
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
<style src="./plageHoraire.css">
</style>
<script src = "./plageHoraire.js">
</script>
