<template>
<div :style="{display:Display}" class="yAlert">
  <div class="yAlLogo" :style="{backgroundColor:leftColor}">
    <img :src="require('./img/'+ logo + '.svg')">
  </div>
  <div :style="{backgroundColor:rightColor}">
      {{ message }}
  </div>
  <div @click="displaying" class="yAlCross">
    <img src="./img/cross.svg"/>
  </div>
</div>
</template>
<style>
.yAlert {
  width: 450px;
  height: 180px;
  position: fixed;
  display: flex;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: -75px;
  color: white;
}
.yAlLogo {
  width: 25%;
  background: blue;
  display: flex;justify-content: center;align-items: center;
}
.yAlLogo img {
  width: 30%;
}
.yAlLogo + div {
  width: 75%;
  font-weight: bold;
  display: flex;justify-content: center;align-items: center;
  background-color: skyblue;
  text-align: center;
}
.yAlCross {
  position: absolute;
  width: 30px;
  height: 30px;
  right:0px;
  top:0px;
  margin-top: 5px;
  margin-right: 5px;
  display: flex;justify-content: center;align-items: center;
}
.yAlCross img {
  width: 75%;
}

</style>
<script>
export default {
  name: 'yAlert',
  props: {
    type: {
      type: String,
      default: 'danger'
    },
    text: {
      type: String,
      default: 'some text'
    }
  },
  data () {
    return {
      Display: 'none',
      message: this.text
    }
  },
  methods: {
    displaying () { this.Display = this.Display == 'flex' ? 'none':'flex' },
    display(message) {
      this.Display = 'flex'
      this.message = message

    }
  },
  computed: {
    leftColor () {
      return this.type === 'danger' ? '#BF3129':'#239930'
    },
    rightColor () {
      return this.type === 'danger' ? '#FF4136':'#25CC40'
    },
    logo () {
      return this.type === 'danger' ? 'cross':'checked'
    }
  }
}
</script>
