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
  },
  postProducts(context, newProducts){
    axios.post(`http://localhost:3000/products`, newProducts)
      .then(res => context.commit('ADD_PRODUCTS', newProducts))
  }
}
export const mutations = {
  SET_PRODUCTS(state , products){
    state.products = products
  },
  ADD_PRODUCTS(state,newProducts){
    state.products.push(newProducts)
  }
}
