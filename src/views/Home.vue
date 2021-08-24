<template>
  <div class="home-wrap">
    <v-toolbar
      color="primary"
      light
      extended
      flat
      src="../../public/pepe.jpg"
      extension-height="150px"
    >
    </v-toolbar>
    <v-card class="mx-auto"
      max-width="700"
      style="margin-top: -32px;">
      <v-toolbar flat style="display: flex; align-items: center; justify-content: center;">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-text-field v-model="search" clearable style="width: 500px;margin-top: 15px;">

        </v-text-field>

        <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

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
