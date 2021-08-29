<template>
  <v-app dark>
    <!-- Nav Start -->
    <v-app-bar app dark>
      <v-btn @click="toHome" class="logoFont" dark plain text>OTAKU SHOP</v-btn>
      <v-spacer></v-spacer>
      <v-btn text elevation="0">SHOP EVERYTHING</v-btn>
      <!-- Collections Dropdown Start -->
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs}">
          <v-btn v-bind="attrs" v-on="on" text elevation="0">COLLECTIONS  <v-icon>mdi-chevron-down</v-icon></v-btn>
        </template>
        <v-list dark>
          <v-list-item>
            <v-btn text elevation="0">COOLOWEEN 2020</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text elevation="0">COOL 2020</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text elevation="0">COOLOWEEN 2019</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text elevation="0">COOL 2019</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text elevation="0">COOL 2018</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Collections Dropdown End -->

      <!-- Tops Dropdown Start -->
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs}">
          <v-btn v-bind="attrs" v-on="on" text elevation="0">TOPS <v-icon>mdi-chevron-down</v-icon></v-btn>
        </template>
        <v-list dark>
          <v-list-item>
            <v-btn text elevation="0">BASIC TEES</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text elevation="0">LONGSLEEVES</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text elevation="0">HOODIES</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text elevation="0">CROP TOPS</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text elevation="0">OUTWEAR</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Tops Dropdown End -->

      <v-btn text elevation="0">PANTS</v-btn>
      <v-btn text elevation="0">MASKS</v-btn>

      <!-- Accessories Dropdown Start -->
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs}">
          <v-btn v-bind="attrs" v-on="on" text elevation="0">ACCESSORIES <v-icon>mdi-chevron-down</v-icon></v-btn>
        </template>
        <v-list dark>
          <v-list-item>
            <v-btn text elevation="0">PINS</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text elevation="0">HATS</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Accessories Dropdown End -->

      <v-btn text elevation="0">ART</v-btn>
      
      <v-spacer></v-spacer>

      <v-badge :content="cart.length" overlap offset-y="25" offset-x="25" color="error">
        <v-btn :class="{hide: !isLoggedIn}" @click="toCart" fab text><v-icon>mdi-cart-variant</v-icon></v-btn>
      </v-badge>
      <!-- <v-btn :class="{hide: !isLoggedIn}" fab text><v-icon>mdi-cart-variant</v-icon></v-btn> -->
      <v-btn :class="{hide: !isLoggedIn}" @click="toProfile" fab text><v-icon>mdi-account-cowboy-hat</v-icon></v-btn>
      <v-btn @click="isLoggedIn = !isLoggedIn" fab text><v-icon>mdi-magnify</v-icon></v-btn>
      
    </v-app-bar>
    <!-- Nav End -->

    <v-main>

      <v-container fluid class="align-self-center">
        <!-- Using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/theme/default-dark.css'
import {mapState} from 'vuex'

Vue.use(VueMaterial)

export default Vue.extend({
  data() {
    return {
      drawer: false,
      group: null,
      cartItems: [],
    }
  },
  computed: {
    ...mapState(['cart', 'isLoggedIn'])
  },
  watch: {
    group(){
      this.drawer = false
    }
  },
  methods: {
    debug() {
      console.log("clicked");
    },
    toProfile(){
      this.$router.push('/profile')
    },
    toHome(){
      this.$router.push('/')
    },
    toCart(){
      this.$router.push('/cart')
    },
    add(){
      console.log('stuff');
      this.cartItems.push("Bananan")
    }
  },
})
</script>

<style lang="scss" scoped>
.hide{
  opacity: 0;
  pointer-events: none;
}
.logoFont{
  font-family: 'Gloria Hallelujah', cursive;
}
</style>
