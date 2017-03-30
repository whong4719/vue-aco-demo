<template>
    <div class="wrap-all">
        <p>page2 -- moment 直接使用</p>
        <p>{{moment()}}</p>
        <v-slots-demo>
            <p>父组件传入slots</p>
            <p slot="child">规定名字的slots</p>
        </v-slots-demo>
    </div>
</template>
<script>
    export default{
        created(){
        }
    }
</script>