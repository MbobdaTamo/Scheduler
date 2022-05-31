<template>
    <div class="amphi">
        <div class="amphOption">
            <div class="amphElement amphTH">
                <span>Nom</span>
                <span>nombre de place</span>
                <span class="amphTHL"> Opération</span>
            </div>
            <div v-for="(am, index) in amphi" :key="index" class="amphElement">
                <span>{{ am.nom }}</span>
                <span>{{ am.capacite }}</span>
                <span>
                    <img @click="formDisplay('modifier',am)" src="./images/pencil.svg"/>
                    <img @click="deleteAmph(am.id)" src="./images/cross.svg"/>
                </span>
            </div>
        </div>
        <div>
            <a class="boutton" @click="formDisplay('ajouter',0)" >Ajouter</a>
        </div>
        <AmphForm @added="getAmphi" ref="amphForm"/>
    </div>
</template>
<style src="./amphi.css">
</style>
<script src = "./amphi.js">
</script>
