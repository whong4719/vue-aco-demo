<template>
    <div class="wrap-all">
        <p>page1 -- 图标使用</p>
        <p>
            <i class="icon iconfont icon-arrowcycle"></i>
            <i class="icon iconfont icon-arrowdown"></i>
            <i class="icon iconfont icon-arrowright"></i>
            <i class="icon iconfont icon-backward"></i>
        </p>
        <input type="text" v-model="text" @keydown.229.shift="showCode()" />
    </div>
</template>
<script>
    export default {
        data(){
            return {
                text: '修改一下'
            }
        },
        watch: {
            text: {
                handler(newValue, oldValue){
                    console.log(oldValue, newValue)
                }
            }
        },
        methods:{
            showCode(){
                console.log('@@@@@');
            }
        }
    }
</script>