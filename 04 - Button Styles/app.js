let vm = Vue.createApp({
    data() {
        return {
            button: ''
        }
    },
    methods: {
        ButtonClick(event) {
            this.button = event.target
            console.log(this.button) 
        }
    },
}).mount("#app")