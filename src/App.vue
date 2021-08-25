<template>
  <v-app dark>
    <!-- <v-navigation-drawer app temporary>
      
    </v-navigation-drawer> -->

    <v-app-bar app dark>
      <v-btn @click="toHome">Logo</v-btn>
      <v-spacer></v-spacer>
      <v-btn text elevation="0">SHOP EVERYTHING</v-btn>
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
      <v-btn text elevation="0">PANTS</v-btn>
      <v-btn text elevation="0">MASKS</v-btn>
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
      <v-btn text elevation="0">ART</v-btn>
      
      <v-spacer></v-spacer>

      <v-btn :class="{hide: !isLoggedIn}" fab text><v-icon>mdi-cart-variant</v-icon></v-btn>
      <v-btn :class="{hide: !isLoggedIn}" @click="toProfile" fab text><v-icon>mdi-account-cowboy-hat</v-icon></v-btn>
      <v-btn @click="isLoggedIn = !isLoggedIn" fab text><v-icon>mdi-magnify</v-icon></v-btn>
      
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid class="align-self-center">

        <!-- If using vue-router -->
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

Vue.use(VueMaterial)

export default Vue.extend({
  data() {
    return {
      drawer: false,
      group: null,
      isLoggedIn: true
    }
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
    }
  },
})
</script>

<style lang="scss" scoped>
.hide{
  opacity: 0;
  pointer-events: none;
}
</style>
