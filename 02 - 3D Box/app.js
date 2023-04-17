Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        }
    },
    methods: {
        PerspectiveSettings: function(event) {
            this.perspective = event.target.value 
        },
        RotateXSettings: function(event) {
            this.rotateX = event.target.value 
        },
        RotateYSettings: function(event) {
            this.rotateY = event.target.value 
        },
        RotateZSettings: function(event) {
            this.rotateZ = event.target.value 
        },
        Reset: function() {
            this.perspective = 100
            this.rotateX = this.rotateY = this.rotateZ = 0
        },
        Copy: function() {
            console.log(`transform: ${this.BoxStyle.transform}`)
        }
    },
    computed: {
        BoxStyle: function(){
            // width: this.perspective + 'px', 
            // height: this.perspective + 'px', 
            return {
                transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`
            }
        }
    }
}).mount('#app')