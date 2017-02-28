<template>
    <div class="wrap-all">
        <p>page3 -- 拥有双向数据绑定的 div </p>
        <v-edit-div v-model="text"></v-edit-div>
        <p>{{text}}</p>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                text: '双向数据绑定的 div '
            }
        }
    }
</script>