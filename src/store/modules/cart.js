import shop from '../../api/shop'

// 购物车逻辑比较复杂：state中items是购物车，
// checkoutStatus是状态码，和提交成功与否有关

const state=()=> ({
    items: [],
    checkoutStatus: null
})

const getters= {
    cartProducts: (state, getters, rootState)=>{
        // id和数量两个参数
        return state.items.map(({id, quantity})=>{
            // 找到的是对象，点了几次就会有几个对象
            const product= rootState.products.all.find(product => product.id === id);
            console.log(product);
            return {
                title: product.title,
                price: product.price,
                quantity
            }
        })
    },
    cartTotalPrice: (state, getters)=>{
        return getters.cartProducts.reduce((total,product)=>{
            return total+ product.price* product.quantity
        }, 0)
    }
}

const actions= {
    //  判断是否添加物品
    checkout({commit, state}, products){
        const savedCartItems= [...state.items];
        commit('setCheckoutStatus', null);
        // 创表
        commit('setCartItems', {items: []});
        //调用买货的方法
        shop.buyProducts(
            products,
            // 买货成功
            ()=> commit('setCheckoutStatus', 'successful'),
            // 失败
            ()=> {
                commit('setCheckoutStatus', 'failed'),
                commit('setCartItems', {items: savedCartItems})
            }
        )
    },

    // 添加物品到购物车
    addProductToCart({state, commit}, product){
        // 经过试验，这里的null其实可以不写，就只传这个方法
        commit('setCheckoutStatus', null)
        if(product.inventory> 0){
            const cartItem= state.items.find(item=> item.id=== product.id);
            if(!cartItem){
                commit('pushProductToCart',{id: product.id});
            }else{
                commit('incrementItemQuantity', cartItem);
            }
            commit('products/decrementProductInventory', {id: product.id}, {root: true});
        }
    }
}

const mutations= {
    pushProductToCart(state, {id}){
        state.items.push({
            id,
            quantity: 1
        })
    },
    incrementItemQuantity(state, {id}){
        const cartItem= state.items.find(item=>item.id=== id)
        cartItem.quantity++
    },
    setCartItems(state, {items}){
        state.items= items
    },
    setCheckoutStatus(state, status){
        state.checkoutStatus= status
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}