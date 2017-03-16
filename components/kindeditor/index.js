/**
 * Vue-KindEditor
 * @author ericz9
 */

var kindEditor = require('./editor.vue')
var VueKindEditor = {
	install: function (Vue) {
		Vue.component('kindeditor', kindEditor)
	}
}

module.exports = VueKindEditor