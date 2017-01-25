Vue.directive('demo', {
    bind: function (el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
            'name: ' + s(binding.name) + '<br>' +
            'value: ' + s(binding.value) + '<br>' +
            'expression: ' + s(binding.expression) + '<br>' +
            'argument: ' + s(binding.arg) + '<br>' +
            'modifiers: ' + s(binding.modifiers) + '<br>' +
            'vnode keys: ' + Object.keys(vnode).join(', ')
    }
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'hello world',
        visible: false,
        value1: null,
        value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value4: "",
        radio: "1",
        pickerOptions2: {
            shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                }
            }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
        },
    }
});

var myMixin = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin')
        }
    }
}

var Component = Vue.extend({
    mixins: [myMixin]
})

var componet = new Component()