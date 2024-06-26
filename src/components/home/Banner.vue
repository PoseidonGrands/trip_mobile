<template>
    <div class="home-banner-box">
        <van-swipe :autoplay="3000" :height="160">
            <van-swipe-item v-for="item in bannerList" :key="item.id">
                <img :src="item.img_url" alt="">
            </van-swipe-item>
        </van-swipe>

    </div>
</template> 

<script>
import { ajax } from '@/utils/ajax'
import { SystemApis } from '@/utils/apis'
    export default{
        data(){
            return{
                bannerList : []
            }
        },
        methods: {
            getSliderList() {
                console.log('api:', SystemApis) 
                ajax.get(SystemApis).then(resp => {
                    this.bannerList = resp.data.objects
                    console.log('resp', resp)
                    console.log('bannerList', this.bannerList)
                }).catch(err => {
                    console.log(err) 
                })
            }
        },
        created(){
            // 从服务器请求数据
            this.getSliderList()
            // this.bannerList = [
            //     {id: 1, url: '/static/home/banner/banner1.jpg'},
            //     {id: 2, url: '/static/home/banner/banner2.jpg'},
            //     {id: 3, url: '/static/home/banner/banner3.jpg'},
            // ]
        }
    }

</script>