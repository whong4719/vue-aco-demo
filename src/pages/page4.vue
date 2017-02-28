<template>
    <div class="wrap-all">
        <p>page4 -- 自定义指令 试一试上传张图片</p>
        <input type="file" multiple v-file-listen="change">
        <ul>
            <li v-for="(file,index) in fileList">
                <img :src="file.src" style="max-height: 100px;max-width: 100px;">
                <span>{{file.origin.name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                fileList: []
            }
        },
        methods: {
            change(files){
                this.fileList.push(...files);
            }
        }
    }
</script>