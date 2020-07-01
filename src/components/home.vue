<template>
    <div class="qqq">
        <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell is-link>
            <van-image :src="img" />
            <span>
              内容  
            </span>
            
        </van-cell>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    data(){
        return{
            img: require("../assets/bag.png"),
        }
    },
    methods:{},
    created(){}
}
</script>

<style scoped>
 .qqq /deep/ .van-cell:last-child{
     padding: 0;
     height: 60px;
     background: rgba(42,141,240,0.5);
 }
 .qqq /deep/ .van-cell__right-icon{
     height: 16px;
     line-height: 16px;
 }
 .qqq /deep/ .van-cell__value--alone{
     margin-top: 0px;
 }
 .qqq /deep/ .van-cell__value{
     top: 10px;
 }
</style>