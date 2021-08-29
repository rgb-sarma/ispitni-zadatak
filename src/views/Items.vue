<template>
<div class="items-wrap">
  <v-toolbar dark>
    <v-range-slider
      v-model="range"
      max="30000"
      min="0"
      hide-details
      class="align-center"
    >
      <template v-slot:prepend>
        <v-text-field
          :value="range[0]"
          class="mt-0 pt-0"
          hide-details
          single-line
          type="number"
          style="width: 60px"
          @change="$set(range, 0, $event)"
        ></v-text-field>
      </template>
      <template v-slot:append>
        <v-text-field
          :value="range[1]"
          class="mt-0 pt-0"
          hide-details
          single-line
          type="number"
          style="width: 60px"
          @change="$set(range, 1, $event)"
        ></v-text-field>
      </template>
    </v-range-slider>
    <v-spacer></v-spacer>
    <h3>TITLE OF CATEGORY</h3>
    <v-spacer></v-spacer>
    <v-checkbox class="mr-5 mt-5" v-model="xxl" label="XXL"></v-checkbox>
    <v-checkbox class="mr-5 mt-5" v-model="xl" label="XL"></v-checkbox>
    <v-checkbox class="mr-5 mt-5" v-model="l" label="L"></v-checkbox>
    <v-checkbox class="mr-5 mt-5" v-model="m" label="M"></v-checkbox>
    <v-checkbox class="mr-5 mt-5" v-model="s" label="S"></v-checkbox>
    <v-checkbox class="mr-5 mt-5" v-model="xs" label="XS"></v-checkbox>
  </v-toolbar>
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
import Vue from "vue";
import Product from '../components/Product.vue'

export default Vue.extend({
  name: "Items",
  components: {
      Product,
  },
  data() {
    return {
      range: [0, 15000],
      xxl: false,
      xl: false,
      l: false,
      m: false,
      s: false,
      xs: false,
    };
  },
});
</script>

<style>
</style>