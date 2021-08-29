<template>
  <div class="test">
    <v-parallax
      light
      src="../../public/landing.jpg"
      style="padding: 0;"
      height="800"
    >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
        align-self="center"
      >
        <h1 class="text-h4 font-weight-thin mb-4">
          Otaku Shop
        </h1>
        <h4 class="subheading">
          BE DIFFERENT
        </h4>
      </v-col>
      </v-row>
    </v-parallax>
    <div class="product-wrap">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Product from '../components/Product.vue'

  export default Vue.extend({
    name: 'Home',
    computed: {
    },
    components: {
      Product
    },
    methods: {
    },
  })
</script>

<style lang="scss">
.container{
  padding: 0;
  margin: 0;
}

.product-wrap{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.filler{
  height: 200px;
  width: 200px;
  background-color: chocolate;
}
</style>