Vue.component('dfis-select', {
    template: '<div>A custom component</div>'
});

var data = {
    counter: 0
};

Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{counter}}</button>',
    data: function () {
        'use strict';
        return {
            counter: 0
        };
    }
});

Vue.component('child', {
    props: ['message'],
    template: '<span>{{message}}</span>'
});

Vue.component('example', {
    props: {
        propA: Number,
        propB: [String, Number],
        propC: {
            type: String,
            required: true
        },
        propD: {
            type: Number,
            default: 180
        },
        propE: {
            type: Object,
            default: function () {
                'use strict';
                return {message: 'hello'};
            }
        },
        propF: {
            validator: function (value) {
                'use strict';
                return value > 19;
            }
        }
    },
    template: '<div><span>propC: {{propC}}</span> <span>propE: {{propE}}</span></div>'
});

Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{counter}}</button>',
    data: function () {
         'use strict';
        return {counter: 0};
    },
    methods: {
        increment: function () {
            this.counter += 1;
            this.$emit('increment');
        }
    }
});

Vue.component('currency-input', {
    template: '<span>$<input ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)"></span>',
    props: ['value'],
    methods: {
        updateValue: function (value) {
            var formattedValue = value.trim().slice(0, value.indexOf('.') + 3);
            if (formattedValue !== value) {
                this.$refs.input.value = formattedValue;
            }
            this.$emit('input', Number(formattedValue));
        }
    }
});
var app = new Vue({
    el: '#app',
    data: {
        parentMsg: 'hello world!',
        total: 0,
        amount: 1.0
    },
    components: {
        'dfis-editor': {
            template: '<div>A DFIS custom component</div>'
        }
    },
    methods: {
        incrementTotal: function () {
            this.total += 1;
        }
    }
});
