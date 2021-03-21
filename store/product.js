import axios from 'axios';

export const state = () => ({
  products: []
})

export const actions = {
  getProducts({commit}){
    axios.get('http://localhost:3000/products')
      .then(r =>{
        commit('SET_PRODUCTS', r.data)
      })
      .catch(err => console.error(err))
  }
}
export const mutations = {
  SET_PRODUCTS(state , products){
    state.products = products
  }
}
