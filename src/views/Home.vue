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
    <div class="filler"></div>
    <div class="filler"></div>
    <div class="filler"></div>
    <div class="filler"></div>
    <div class="filler"></div>
    <div class="filler"></div>
    <div class="filler"></div>
    <div class="filler"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

  export default Vue.extend({
    name: 'Home',

    components: {
    },
  })
</script>

<style lang="scss">
.container{
  padding: 0;
  margin: 0;
}
.filler{
  height: 200px;
  width: 200px;
  background-color: chocolate;
}
</style>