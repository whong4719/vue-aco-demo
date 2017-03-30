<template>
    <div class="wrap-all">
        <p>page3 -- 拥有双向数据绑定的 div </p>
        <v-edit-div v-model="text"></v-edit-div>
        <p :html="text"></p>
        <button @click="addOne()">++1</button>
        <v-at-div v-model="text" v-once :atList="atList"></v-at-div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                text: '双向数据绑定的 div ',
                atList:[
                    {fullName: '123'},
                    {fullName: '234'},
                    {fullName: '345'}
                ]
            }
        },
        methods:{
            addOne(){
                this.text = this.text + 1;
            }
        }
    }
</script>