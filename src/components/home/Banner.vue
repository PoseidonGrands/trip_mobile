<template>
    <div class="home-banner-box">
        <van-swipe :autoplay="3000" :height="160">
            <van-swipe-item v-for="item in bannerList" :key="item.id">
                <img :src="item.url" alt="">
            </van-swipe-item>
        </van-swipe>

    </div>
</template> 

<script>
    export default{
        data(){
            return{
                bannerList : []
            }
        },
        created(){
            // 从服务器请求数据
            this.bannerList = [
                {id: 1, url: '/static/home/banner/banner1.jpg'},
                {id: 2, url: '/static/home/banner/banner2.jpg'},
                {id: 3, url: '/static/home/banner/banner3.jpg'},
            ]
        }
    }

</script>