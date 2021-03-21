<template>
  <div class="my-items">
    <div v-for="item in products" :key="item.id">
      <h1>{{item.title}}</h1>
    </div>
  </div>
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
