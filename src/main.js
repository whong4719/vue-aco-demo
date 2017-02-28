import Vue from 'vue'
import VueRouter from 'vue-router'
import methods from './util/addMethods'
import FastClick  from '../bower_components/fastclick/lib/fastclick'

import routes from './config/routes'
import components from './components/' //加载公共组件

import './scss/main.scss'

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

Vue.directive('fileListen', {
    bind: function (el, binding) {
        el.addEventListener('change', function () {
            let files = el.files;
            let fileList = [];
            for (let i = 0, len = files.length; i < len; i++) {
                fileList.push({
                    origin: files[i],
                    src: window.URL.createObjectURL(files[i]),
                    upType: 0,
                    progress: 0
                })
            }
            binding.value(fileList);
            el.value = null;
        })
    }
});

new Vue({router}).$mount('#app');
