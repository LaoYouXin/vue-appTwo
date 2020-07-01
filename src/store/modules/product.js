import shop from '../../api/shop'

const state= ()=>({
    all: []
})

//产品模块部分比较简单，只是单纯的获取对象然后做一个加减的东西

const getters= {}

const actions= {
    getAllProducts({commit}){
        shop.getProducts(products =>{
            commit('setProducts', products)
        })
    }
}

const mutations= {
    setProducts(state, products) {
        state.all= products
    },
    decrementProductInventory(state, {id}) {
        const product= state.all.find(product=>product.id=== id);
        product.inventory--;
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }