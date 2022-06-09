<template>
      <div class="blueTextBox" :style="{left:toPxX(positionX), top:toPxY(positionY), height:toPxH(height)}">
          <div>
            <div style="font-weight:bold">{{ nom }}</div>
            <div>{{ classe }} /salle:{{ salle }}</div>
            <div>prof: {{ enseignant }}</div>
            <div class="bltbDate">{{ debut }} - {{ fin }} </div>
          </div>
      </div>
</template>
<style>
    .blueTextBox {
        font-family: Arial;
        font-size: 13px;
        overflow: hidden;
        position: absolute;
        width:13.5%;
        box-sizing: border-box;
        padding: 2px;
        color:white
    }
    .blueTextBox > div {
      box-sizing: border-box;
      background-color:#007BFF;
      display: flex; justify-content: center; align-items: center;
      flex-direction: column;
      border-radius: 0.3em;
      height: 100%;
      overflow: hidden;
      z-index: 1;
    }
    .bltbDate {
      color:orange;
      font-weight: bold;
    }
</style>
<script>
export default {
  name: 'ButtonI0',
  props: {
    nom: String,
    classe: String,
    enseignant: String,
    salle: String,
    debut: String,
    fin: String,
    positionX: Number,
    positionY: Number,
    height: Number
  },
  methods: {
    toPxY (x) {
      return (70 * x + 30) + 'px'
    },
    toPxH (x) {
      return (70 * x) + 'px'
    },
    toPxX (x) {
      return (13.5 * x + 5.5) + '%'
    }
  }
}
</script>
