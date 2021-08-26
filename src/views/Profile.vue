<template>
  <div class="profile">
    <v-navigation-drawer permanent dark fixed style="height: calc(100vh - 64px); top: 64px;">
      <v-list-item @click="debug" class="profileHover">
        <v-list-item-content >
          <v-list-item-title class="text-h6">
            Profile
          </v-list-item-title>
          <v-list-item-subtitle>
            click to change info
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        
      >
        <v-list-item>
          <v-list-item-title>Name</v-list-item-title> 
          <v-list-item-subtitle>Ime Prezime</v-list-item-subtitle>
        </v-list-item>
        <v-list-item three-line>
          <v-list-item-title>Address</v-list-item-title> 
          <v-list-item-subtitle>Ulica Broj, Grad</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Country</v-list-item-title> 
          <v-list-item-subtitle>Drzava</v-list-item-subtitle>
        </v-list-item>

      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Profile',
  methods: {
    debug() {
      console.log("Bababui");
    }
  },

})
</script>

<style lang="scss">
.profileHover{
  &:hover{
    cursor: pointer;
  }
}
</style>