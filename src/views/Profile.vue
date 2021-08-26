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
        <v-list-item two-line>
          <v-list-item-title>Name</v-list-item-title> 
          <v-list-item-subtitle>Ime Prezime</v-list-item-subtitle>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-title>Address</v-list-item-title> 
          <v-list-item-subtitle>Ulica Broj, Grad</v-list-item-subtitle>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-title>Country</v-list-item-title> 
          <v-list-item-subtitle>Drzava</v-list-item-subtitle>
        </v-list-item>

      </v-list>
      <v-chip
            v-for="chip in chips" :key="chip"
            close
            dark
            @click="select"
            @click:close="remove(item)"
          >
            <strong>{{ chip }}</strong>&nbsp;
          </v-chip>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <div class="table-wrap">
      <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="10"
          single-expand="false"
          show-expand
          item-key="name"
          :expanded.sync="expanded"
          class="elevation-1"
          style="min-width: 1350px;"
          hide-default-footer
        > 
          <template v-slot:item.calories="{ item }">
            <v-chip
              :color="getColor(item.calories)"
              dark
            >
              {{ item.calories }}
            </v-chip>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="rand"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              @click="debug(item)"
            >
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              More info about {{ item.name }}
            </td>
          </template>
        </v-data-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Profile',
  data() {
    return {
      expanded: [],
      singleExpand: false,
      headers: [
        {
          text: 'Order ID',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Status', value: 'calories', sortable: false },
        { text: 'Number of Items', value: 'fat', sortable: false },
        { text: 'Shipped from', value: 'carbs', sortable: false },
        { text: 'Est. Time of Arrival', value: 'iron', sortable: false },
        { text: 'Total', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false },
        { text: '', value: 'data-table-expand' },
      ],
      items: [
          {
            name: '#870439',
            calories: 'Delivered',
            fat: '3',
            carbs: 'Beogradska 1, Beograd',
            protein: 15678,
            iron: 3 + ' days',
          },
          {
            name: '#870356',
            calories: 'In Progress',
            fat: 6,
            carbs: 'Moscow, Russia',
            protein: 25690,
            iron: 12 + ' days',
          },
          {
            name: '#123456',
            calories: 'Canceled',
            fat: 2,
            carbs: 'Melbourne, Australia',
            protein: 12560,
            iron: 8 + ' days',
          },
          
        ],
        chips: [
          'Art', 'Kebab', 'Pizza', 'Gyros', 'Sushi'
        ]
    }
  },
  methods: {
    debug() {
      console.log("Bababui");
    },
    rand(){
      console.log(Math.floor(100000 + Math.random() * 900000));
    },
    getColor(val){
      switch (val) {
        case 'Delivered':
          return 'green'
        
        case 'In Progress':
          return 'blue'
        
        case 'Canceled':
          return 'red'
        
      }
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
.table-wrap{
  position: relative;
  left: 250px;
  height: calc(100vh - 80px);
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>