<template>
    <div contenteditable="true"
         v-html="value"
         @change="changeText">
    </div>
</template>

<style>
</style>
<script>
    export default {
        props: ['value'],
        methods:{
            changeText(){
                let innerText = this.$el.innerHTML;
                this.$emit('input',innerText);
            }
        }
    }
</script>
