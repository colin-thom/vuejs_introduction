new Vue({
    el: '#app',
    data: {
        message: 'eh coucou',
        message2: 'ça va ?',
        message3: 'texte',
        checked: true,
        show: true,
    },
    methods: {
        changetext: function(){
            this.message2 = this.message3;
        },
    }
})
