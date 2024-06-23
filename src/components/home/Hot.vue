<template>
    <div class="home-hot-box">
        <!-- 顶部栏 -->
        <van-cell icon="/static/home/hot/fire.png"
                title="热门推荐"
                is-link
                value="全部榜单"
                title-style="text-align:left" />
        <!-- 景点列表 -->
         <div class="box-main">
            <a href="#" class="box-item" v-for="item in dataList" :key="item.id" >
                <div class="img">
                    <span></span>
                    <img :src="item.img" alt="">
                </div>
                <h5 class="van-ellipsis">{{ item.name }}</h5>
                <div class="price">
                    <span>￥{{ item.price }}</span>起
                </div>
            </a>
         </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                dataList: []
            }
        },
        created(){
            this.dataList = [
                {id: 1, img: '/static/home/hot/h1.jpg', name: '测试景点列表1111', price: 19},
                {id: 2, img: '/static/home/hot/h2.jpg', name: '测试景点列表1111', price: 19},
                {id: 3, img: '/static/home/hot/h3.jpg', name: '测试景点列表1111', price: 19},
                {id: 4, img: '/static/home/hot/h4.jpg', name: '测试景点列表1111', price: 19},
                {id: 5, img: '/static/home/hot/h5.jpg', name: '测试景点列表1111', price: 19},
                {id: 6, img: '/static/home/hot/h6.jpg', name: '测试景点列表1111', price: 19},
                {id: 7, img: '/static/home/hot/h7.jpg', name: '测试景点列表1111', price: 19},
            ]
        }
    }
</script>

<style lang="less">
.home-hot-box{
    .box-main{
        display: flex;

        width: 100%;
        
        padding: 10px 20px;
        overflow: scroll;
    }
    .box-item{
        display: flex;
        flex-direction: column;

        width: 100px;
        margin-right: 10px;
        
        .img{
            position: relative;

            span{
                display: inline-block;

                position: absolute;
                left: 0;
                top: 0;

                width: 42px;
                height: 20px;

                z-index: 10;
            }

            img{
                widows: 100px;
                height: 100px;
            }
        }

        h5{
            color: #212121;
            padding-top: 1px 0;
            margin: 2px 0;
            font-size: 12px;
        }

        .price{
            color: #212121;
            font-size: 12px;
            span{
                color: #f50;
                font-size: 13px;
            }
        }

            // &符号代表上一层的css类
        &:nth-child(1) .img span{
            background: url('/static/home/hot/top1.png') no-repeat;
            background-size: 100% auto;
        }

        &:nth-child(2) .img span{
            background: url('/static/home/hot/top2.png') no-repeat;
            background-size: 100% auto;
        }

        &:nth-child(3) .img span{
            background: url('/static/home/hot/top3.png') no-repeat;
            background-size: 100% auto;
        }
    }

}
</style>