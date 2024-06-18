<template>
    <div class="page-home">
        <h1>旅游网</h1>
    </div>
</template>

<script>
import { ajax } from '@/utils/ajax'
export default{
    //页面创建时调用的生命周期函数
    created(){
        console.log('created...')
        // ajax.get('http://django.t.mukewang.com/api/system/slider/list/?types=11').then(resp => {
        // ajax.get('http://django.t.mukewang.com/api/accounts/user/detail').then(resp => {
        // ajax.get('http://localhost:5173/api/system/slider/list/?types=11').then(resp => {
        // ajax.get('http://192.168.0.103:8000/hello/ret_json').then(resp => {
        // ajax.get('http://localhost:5173/hello/ret_json').then(resp => {
        ajax.get('http://localhost:5173/hello/response_json').then(resp => {
            console.log('resp is:', resp)
        }).catch(err => {
            console.log('error is:', err)
        }
        )
    }
}
</script>

<style lang="less">

.page-home{
    
}
</style>