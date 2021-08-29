<template>
  <v-toolbar>
      <v-list-item-avatar size="40">
          <v-img src="../../public/placeholder.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item>
          <v-list-item-title>Ime Proizvoda</v-list-item-title>
      </v-list-item>
      <v-list-item>
          <v-list-item-title>Size: size</v-list-item-title>
      </v-list-item>
      <v-list-item>
          <v-list-item-title>
              Price: nesto
          </v-list-item-title>
      </v-list-item>
      <v-spacer></v-spacer>
      <v-btn fab color="success" x-small @click="count++">
          <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-text-field
        class="mr-5 ml-5 pt-5"
        style="width: 50px;"
        v-model="count"
      ></v-text-field>
      <v-btn fab color="error" x-small @click="reduce">
          <v-icon>mdi-minus</v-icon>
      </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            count: 1
        }
    },
    methods: {
        reduce() {
            if(this.count - 1 === 0){
                $emit('deleteItem')
            } else {
                this.count--
            }
        }
    },
})
</script>

<style>
.count{
    margin: 0 10px;
}
</style>