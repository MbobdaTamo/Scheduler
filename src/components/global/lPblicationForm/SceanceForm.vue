<template>
<section class="lPblicationForm" :style="{ display:Display }" >
    <div class="lPBFCTitle">{{role}} Sceance
        <div class="lPBFCCross" @click="hide()"><img src="./more.svg"/></div>
    </div>
    <div class="lPBFCBody">
            <div class="lPBFCType"><span>Type publication</span></div>
            <div><textarea v-model="nom" placeholder="nom"></textarea> </div>
            <div><textarea v-model="description" placeholder="description"></textarea> </div>
            <span>Heure début:</span>
            <select><option v-for="(debut, index) in debuts" :key="index">{{ debut }}</option></select>
            <span>Durée:</span>
            <select><option v-for="(duree, index) in durees" :key="index">{{ duree }}</option></select>
            <div class="lPBFCButton" @click='publishing' >{{ role }}</div>
    </div>
</section>
</template>
<style src="./lPblicationForm.css">
</style>
<script src = "./sceanceForm.js">
</script>
