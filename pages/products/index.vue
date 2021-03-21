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
            @click="addProduct()"
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


import mapMutations from "vuex/dist/vuex.mjs";
import mapActions from "vuex/dist/vuex.mjs";

export default {
  name: "index",
  data () {
    return {
      newProduct:{
        title: "testitem",
        description: "test description",
        price: "4555"
      }
    }
  },
  computed:{
    products (){
      return this.$store.state.product.products
    }
  },
  methods :{
    addProduct (){
      // COMMIT RECHERCHE MUTATION POUR LOCAL
      // this.$store.commit('product/ADD_PRODUCTS', {
      //   title: "test",
      //   description: "test description",
      //   price: "4555"
      // })
      // DISPATCH RECHERCHE POUR API
      this.$store.dispatch('product/postProducts',{
       ...this.newProduct
      })
    }
  },
  mounted (){
    this.$store.dispatch('product/getProducts')
  }
}
</script>

<style scoped>

</style>
