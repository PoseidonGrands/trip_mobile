<template>
    <div class="home-star-box">
        <!-- 顶部栏 -->
        <van-cell icon="location-o"
                title="精选景点"
                is-link
                value="更多" 
                title-style="text-align:left" />
        <!-- 景点列表 -->
        <div class="box-main">
            <!-- 将动态数据每次循环取出的item传递给子组件 -->
            <SiteList v-for="item in calSatisfaction" :key="item.id" :item="item" />
        </div>
    </div>
</template>

<script>
import SiteList from '@/components/common/SiteList.vue'
    export default{
        components: {
            SiteList
        },
        data() {
            return {
                dataList: []
            }
        },
        computed: {
            // 调用该函数获得dataList中的每个值
            calSatisfaction(){
                return this.dataList.map(
                    item => {
                        const scale = (item.star_count / item.star) * 100
                        return{
                            // 不加...会变成{item:{..}, scale:xx}
                            ...item,
                            scale
                        }
                    }
                )
            }
        },
        created(){
            this.dataList = [
                {id: 1, name: '景点11111', star_count: 4, star: 5, img: '/static/home/hot/h1.jpg',location: '广东省-广州市', price: 10},
                {id: 2, name: '景点11111', star_count: 3, star: 4, img: '/static/home/hot/h2.jpg',location: '广东省-广州市', price: 20},
                {id: 3, name: '景点11111', star_count: 1, star: 3, img: '/static/home/hot/h3.jpg',location: '广东省-广州市', price: 30},
                {id: 4, name: '景点11111', star_count: 2, star: 4.5, img: '/static/home/hot/h4.jpg',location: '广东省-广州市', price: 40},
            ]
        }
    }
</script>
<style lang="less">
    .home-star-box{
        .box-main{
            padding: 10px 20px;
        }
    }
</style>


