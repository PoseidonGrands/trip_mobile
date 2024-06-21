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
            <a href="#" class="box-item">
                <div class="img">
                    <span></span>
                    <img src="/static/home/hot/h1.jpg" alt="">
                </div>
                <h5 class="van-ellipsis">热门的景点信息aaaaaaaa</h5>
                <div class="price">
                    <span>￥69</span>起
                </div>
            </a>
            <a href="#" class="box-item">
                <div class="img">
                    <span></span>
                    <img src="/static/home/hot/h1.jpg" alt="">
                </div>
                <h5 class="van-ellipsis">热门的景点信息aaaaaaaa</h5>
                <div class="price">
                    <span>￥69</span>起
                </div>
            </a>
            <a href="#" class="box-item">
                <div class="img">
                    <span></span>
                    <img src="/static/home/hot/h1.jpg" alt="">
                </div>
                <h5 class="van-ellipsis">热门的景点信息aaaaaaaa</h5>
                <div class="price">
                    <span>￥69</span>起
                </div>
            </a>
         </div>
    </div>
</template>

<script>
    export default{
        
    }
</script>

<style lang="less">
.home-hot-box{
    .box-main{
        display: flex;

        width: 100%;
        
        padding-top: 10px;
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