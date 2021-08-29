<template>
  <div class="item-wrap" @click="toItem">
      <img src="../../public/pepe.jpg" alt="">
      <div class="price">15,564 RSD</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Product',
    data() {
        return {
            
        }
    },
    methods: {
        toItem() {
            this.$router.push('/itempage')
        }
    },
})
</script>

<style>
.item-wrap{
    width: calc(99vw/3);
    height: 850px;
    background-color: blue;
}
.price{
    position: relative;
    max-width: 200px;
    padding: 5px;
    top: -100px;
    left: 0;
    z-index: 2;
    background-color: red;
    color: #fff;
    font-size: 2rem;
    opacity: 0;
}
.item-wrap:hover{
    cursor: pointer;
}
.item-wrap:hover > .price{
    opacity: 1;
}
.item-wrap img{
    height: 100%;
}
</style>