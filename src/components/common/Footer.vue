<template>
    <!-- 底部导航 -->
    <div class="">
        <van-tabbar v-model="active">
            <van-tabbar-item name='home' icon="wap-home-o" info="3">首页</van-tabbar-item>
            <van-tabbar-item name='search' icon="search">搜索</van-tabbar-item>
            <van-tabbar-item name='mine' icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default{
        data() {
            return{
                active: 'home'
            }
        }
        
    }
</script>