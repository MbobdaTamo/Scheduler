<template>
<section class="lPblicationForm" style="left:100%; margin-left:-520px" :style="{ display:Display }" >
    <div class="lPBFCTitle">{{role}} Sceance
        <div class="lPBFCCross" @click="hide()"><img src="./more.svg"/></div>
    </div>
    <div class="lPBFCBody">
            <div class="lPBFCType"><span>Type publication</span></div>
            <div><textarea v-model="nom" placeholder="nom"></textarea> </div>
            <div><textarea v-model="description" placeholder="description"></textarea> </div>
            <h1 class="lPBFCSpant">Début:</h1>
            <p class="lPBFCTime">
                <select v-model="heureD"><option v-for="(heure, index) in heures" :key="index">{{ heure }}</option></select>
                <span>H</span>
                <select v-model="minD"><option v-for="(min, index) in minutes" :key="index">{{ min }}</option></select>
                <span>min</span>
            </p>
            <h1 class="lPBFCSpant">Fin:</h1>   
            <p class="lPBFCTime">
                <select v-model="heureF"><option v-for="(heure, index) in heuresF" :key="index">{{ heure }}</option></select>
                <span>H</span>
                <select v-model="minF"><option v-for="(min, index) in minutes" :key="index">{{ min }}</option></select>
                <span>min</span>
            </p>
            <div class="lPBFCButton" @click='onPublish' >{{ role }}</div>
            <YAlert ref='yAlert'/>
    </div>
</section>
</template>
<style src="./lPblicationForm.css">
</style>
<script src = "./sceanceForm.js">
</script>
