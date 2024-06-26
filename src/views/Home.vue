<template>
    <div class="page-home">
        <h3 style="text-align:center; ">旅游网</h3>
        <Banner />
        <Hot />
        <Star />
        <TripFooter />
    </div>
</template>

<script>
import { ajax } from '@/utils/ajax'
// 局部导入vant组件
// import { Button } from 'vant';
// import 'vant/lib/button/style'

//导入视图组件
import Banner from '@/components/home/Banner.vue';
import Hot from '@/components/home/Hot.vue'
import Star from '@/components/home/Star.vue';
import TripFooter from '@/components/common/Footer.vue';

export default{
    components: {
        Banner,
        Hot,
        Star,
        TripFooter,
    },
    //页面创建时调用的生命周期函数
    created(){
        console.log('created...')
        // ajax.get('http://django.t.mukewang.com/api/system/slider/list/?types=11').then(resp => {
        // ajax.get('http://localhost:5173/api/system/slider/list/?types=11').then(resp => {
        // ajax.get('http://localhost:5173/hello/response_json').then(resp => {
        //     console.log('resp is:', resp)
        // }).catch(err => {
        //     console.log('error is:', err)
        // }
        // )
    }
}
</script>

<style lang="less">

// .page-home{
    
// }
</style>