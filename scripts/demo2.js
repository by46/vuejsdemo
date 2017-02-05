var app = new Vue({
    el: '#app',
    data: {
        message: 'hello world',
        checkedNames: [],
        picked: "one",
        selected: "",
        multi_selected: [],
        options: [
            {text: "One", value: "A"},
            {text: "Two", value: "B"},
            {text: "Three", value: "C"}
        ],
        toggle: '',
        a: 'toggled',
        b: "untoggled",
        simple_picked: '',
        selected2: '',
        msg:'',
        age:0
    }
});
