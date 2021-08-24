<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" temporary>
      <!-- -->
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item @click="toProfile">
            <v-icon>
              mdi-account-circle-outline
            </v-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
           <v-list-item @click="debug">
            <v-icon>
              mdi-clipboard-list-outline
            </v-icon>
            <v-list-item-title>Saved</v-list-item-title>
          </v-list-item>
           <v-list-item @click="debug">
            <v-icon>
              mdi-heart-outline
            </v-icon>
            <v-list-item-title>Orders</v-list-item-title>
          </v-list-item>
           <v-list-item @click="debug">
            <v-icon>
              mdi-power
            </v-icon>
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
      <v-btn fab plain @click="drawer = !drawer">
        <md-icon>menu</md-icon>
      </v-btn>
      <v-btn @click="toHome">Home</v-btn>
      <v-spacer></v-spacer>
      <v-btn fab plain>
        <md-icon>shopping_basket</md-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

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
import 'vue-material/dist/theme/default.css'
// import 'vue-material/dist/theme/default-dark.css'

Vue.use(VueMaterial)

export default Vue.extend({
  data() {
    return {
      drawer: false,
      group: null
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
      this.$router.push('/about')
    },
    toHome(){
      this.$router.push('/')
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
