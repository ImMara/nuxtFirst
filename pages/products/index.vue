<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line  v-for="product in products">
      <v-list-item-content>
        <div class="overline mb-4">
          OVERLINE
        </div>
        <v-list-item-title class="headline mb-1">
          {{ product.title }}
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
  import { createNamespacedHelpers } from 'vuex'
  const { mapState, mapActions } = createNamespacedHelpers('products')

export default {
  name: "index",
  data () {
    return {
      msg: 'Welcome to my Vuex Store'
    }
  },
  computed:{
    products (){
      return this.$store.state.product.products
    }
  },
  mounted (){
    this.$store.dispatch("product/getProducts")
  }
}
</script>

<style scoped>

</style>
