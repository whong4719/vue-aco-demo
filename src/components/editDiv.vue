<template>
    <div contenteditable="true"
         v-html="value"
         @input="changeText">
    </div>
</template>
<style>
</style>
<script>
    export default {
        props: ['value'],
        methods:{
            changeText(){
                this.$emit('input',this.$el.innerHTML);
            }
        }
    }
</script>
