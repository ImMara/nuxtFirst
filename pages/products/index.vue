<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="product in products">
        <v-card
          class="mx-auto"
          max-width="600"
          outlined
        >
        <v-list-item three-line  >
          <v-list-item-content>
            <div class="overline mb-4">
              {{ product.price }} $
            </div>
            <v-list-item-title class="headline mb-1">
              {{ product.title }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ product.description }}</v-list-item-subtitle>
          </v-list-item-content>

        </v-list-item>

        <v-card-actions>
          <v-btn
            outlined
            rounded
            text
          >
            Edit
          </v-btn>
        </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
