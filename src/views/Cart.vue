<template>
  <div class="cart-wrap">
      <v-card width="1000" min-height="100">
          <CartItem @deleteItem="remove"/>
          <CartItem />
          <CartItem />
          <v-toolbar dense>
              <v-spacer></v-spacer>
              Total: agregirana vrednost
          </v-toolbar>
          <v-toolbar dense>
              <v-btn color="error">Clear Cart</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="success">Order</v-btn>
          </v-toolbar>

      </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CartItem from '../components/CartItem.vue'

export default Vue.extend({
    name: 'Cart',
    components: {
        CartItem,
    },
    methods: {
        remove() {
            
        }
    },
})
</script>

<style>
.cart-wrap{
    position: relative;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>