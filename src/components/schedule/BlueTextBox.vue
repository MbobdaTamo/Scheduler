<template>
      <div class="blueTextBox" :style="{left:toPxX(positionX), top:toPxY(positionY), height:toPxH(height)}">
          <div>{{ message }}</div>
      </div>
</template>
<style>
    .blueTextBox {
        font-family: Arial;
        font-size: 13px;
        overflow: hidden;
        position: absolute;
        width:15.5%;
        box-sizing: border-box;
        padding-bottom: 2px;
        padding-right: 2px;
    }
    .blueTextBox div {
      background-color:#007BFF;
      display: flex; justify-content: center; align-items: center;
      border-radius: 0.3em;
      height: 100%;
    }
</style>
<script>
export default {
  name: 'ButtonI0',
  props: {
    message: String,
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
      return (15.5 * x + 6.2) + '%'
    }
  }
}
</script>
