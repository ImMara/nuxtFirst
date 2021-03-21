import axios from 'axios';

export const state = () => ({
  products: []
})

export const actions = {
  getProducts({commit}){
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(r =>{
        commit('SET_PRODUCTS', r.data)
      })
  }
}
export const mutations = {
  SET_PRODUCTS(state , products){
    state.products = products
  }
}
