<template>
    <a href="#">
        <div class="left">
            <img :src="item.img" alt="">
        </div>
        <div class="right">
            <h5 class="title">{{ item.name }}</h5>
            <van-rate v-model="item.star" readonly />
            <div class="comment">{{ item.star_count }}人点评 | {{ item.scale }}%满意</div>
            <div class="location">{{ item.location }}</div>
            <div class="price">￥{{ item.price }}起</div>
            <span></span>
        </div>
    </a>
</template>

<script>
export default{
    props: ['item']
}
</script>


<style lang="less">
a{
    display: flex;
    margin-top: 6px;
    border-bottom: 1px solid #f6f6f6;
    .left img{
        width: 85px;
        height: 85px;
    }
    .right{
        position: relative;

        padding-left: 5px;

        // 该 flex 项将增长以占据其 flex 容器内的剩余空间
        flex-grow: 1;

        text-align: left;
        justify-content: left;
        
        .title{
            color: #212121;
            font-size: 14px;
            margin: 0;
        }
        .comment{
            font-size: 12px;
            color: #666;
        }
        .location{
            font-size: 12px;
            color: #999;
        }
        .price{
            // display: inline-block;
            position: absolute;
            right: 10px;
            top: 20px;

            color: #f50;
            font-size: 16px;
            font-weight: bold; 
        }
    }
}
</style>