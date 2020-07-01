<template>
    <div>
       <div v-for="product in products" :key= product.id>
           <span>{{product.title}}</span>---<span>{{product.price}}</span>--<span>{{product.inventory}}</span>
           <button :disabled="!product.inventory" @click="addProductToCart(product)">点击添加</button>
       </div>
       <button @click= "gotoCart">点击跳转</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    data(){
        return{}
    },
    computed: mapState
        ({
            products: state=> state.products.all
        }),
    methods: {
        ...mapActions('cart',
            ['addProductToCart']
        ),
        getit(){
            // 测试，非必要，可以删除
            console.log("hello lgx");
        },
        gotoCart(){
            this.$router.push({
                name: 'cart'
            });
        } 
    },

    created(){
        this.$store.dispatch('products/getAllProducts');
        this.getit();
        console.log(this.$store.state)
    }
}
</script>