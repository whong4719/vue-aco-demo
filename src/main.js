import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './config/routes'
import components from './components/' //加载公共组件

import './scss/main.scss'

// 添加的一些组件
import methods from './util/addMethods'
import FastClick  from '../bower_components/fastclick/lib/fastclick'

// 手机端点击加速
FastClick.attach(document.body);

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()); //首字母大写
    Vue.component(`v${name}`, components[key])
});

Vue.use(VueRouter);
Vue.use(methods);

const router = new VueRouter({
    routes
});

router.beforeEach((routers, from, next) => {
    next()
});

// 自定义指令 此处监控通过 input 添加的文件
Vue.directive('fileListen', {
    bind: function (el, binding) {
        el.addEventListener('change', function () {
            let files = el.files;
            let fileList = [];
            for (let i = 0, len = files.length; i < len; i++) {
                fileList.push({
                    origin: files[i],
                    src: window.URL.createObjectURL(files[i])
                })
            }
            binding.value(fileList);
            el.value = null;
        })
    }
});

new Vue({router}).$mount('#app');
