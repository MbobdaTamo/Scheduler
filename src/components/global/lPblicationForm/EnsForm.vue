<template>
<section class="lPblicationForm" :style="{ display:Display }" >
    <div class="lPBFCTitle">{{role}} Enseignant
        <div class="lPBFCCross" @click="hide()"><img src="./more.svg"/></div>
    </div>
    <div class="lPBFCBody">
            <div class="lPBFCType"><span>Type publication</span></div>
            <div><textarea v-model="nom" placeholder="nom"></textarea> </div>
            <div><textarea v-model="prenom" placeholder="Prénom"></textarea> </div>
            <div><textarea v-model="grade" placeholder="grade"></textarea> </div>
            <div><textarea v-model="departement" placeholder="département"></textarea> </div>
            <div class="lPBFCButton" @click='publishing' >{{ role }}</div>
    </div>
</section>
</template>
<style src="./lPblicationForm.css">
</style>
<script src = "./ensForm.js">
</script>
