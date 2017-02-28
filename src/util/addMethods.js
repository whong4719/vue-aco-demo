/**
 *
 * Created by admin on 2017/2/28.
 * 用于添加挂载在 vue 实例下的默认的方法
 *
 */

import moment from '../../bower_components/moment/moment.js'
import '../../bower_components/moment/src/locale/zh-cn.js'

window.moment = moment;

function addMethods(Vue) {

    if (addMethods.installed) {
        return;
    }

    Vue.prototype.moment = moment;

}

export default addMethods;