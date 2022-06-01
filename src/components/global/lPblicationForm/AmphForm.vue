<template>
<section class="lPblicationForm" :style="{ display:Display }" >
    <div class="lPBFCTitle">{{role}} salle
        <div class="lPBFCCross" @click="hide()"><img src="./more.svg"/></div>
    </div>
    <div class="lPBFCBody">
            <div class="lPBFCType"><span>Type publication</span></div>
            <div><textarea v-model="publiTitle" placeholder="nom/code"></textarea> </div>
            <div class="input"><input type="number" v-model="publiContent" placeholder="Nombre de place"></div>
            <div class="lPBFCButton" @click='publishing' >{{ role }}</div>
    </div>
</section>
</template>
<style src="./lPblicationForm.css">
</style>
<script src = "./amphForm.js">
</script>
