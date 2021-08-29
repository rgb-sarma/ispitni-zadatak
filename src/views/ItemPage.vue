<template>
  <div class="item-page-wrap">
      <div class="pic-wrap">
        <img src="../../public/pepe.jpg" alt="">
      </div>
      <v-card elevation="0">
        <v-card-title><h2>ITEM NAME</h2></v-card-title>
        <v-card-subtitle>Item Category</v-card-subtitle>
        <v-card class="ml-5" elevation="0" style="font-size: 1.375rem;">CENA PROIZVODA</v-card>
        <v-chip-group class="ml-5">
          <v-chip>Tag</v-chip>
          <v-chip>Tag2</v-chip>
        </v-chip-group>
        <v-select
          :items="options"
          v-model="option"
          label="Select size"
          class="ml-5"
        ></v-select>
        <v-btn class="ml-5" dark @click="dev">ADD TO CART</v-btn>
      </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'ItemPage',
    data() {
      return {
        options: ['XXL', 'XL', 'L', 'M', 'S', 'XS', ],
        option: null
      }
    },
    methods: {
      dev() {
        console.log(this.option);
        
      }
    },
})
</script>

<style>
.item-page-wrap{
  display: flex;
  flex-direction: row;
}
.pic-wrap{
  max-width: 40%;
  height: 850px;
}
.pic-wrap img{
  height: 100%;
  object-fit: cover;
}
</style>