<template>
    <div class="wrap-all">
        <p>slots demo</p>
        <div>
            <div>qwe</div>
            <v-at-div v-model="text" v-once :atList="atList"></v-at-div>
        </div>

        <v-edit-div v-model="text"></v-edit-div>
        <slot>没有要分发的内容</slot>
        <slot name="child"></slot>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                text: '123'
            }
        },
        created(){
            console.log(this.$slots);
            console.log(this);
        }
    }
</script>