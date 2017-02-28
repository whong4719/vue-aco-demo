/**
 * Created by admin on 2017/2/10.
 */

import moment from '../../bower_components/moment/moment.js'
import axios from '../../bower_components/axios/dist/axios.min.js'
import '../../bower_components/moment/src/locale/zh-cn.js'

window.moment = moment;
window.axios = axios;

function addMethods(Vue) {

    if (addMethods.installed) {
        return;
    }

    Vue.prototype.moment = moment;

}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

export default addMethods;