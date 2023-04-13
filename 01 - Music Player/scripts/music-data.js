let vm = Vue.createApp({
    data() {
        return {
            music: {
                    name: 'Acorda Devinho',
                    artist: 'Banda Rocketseat',
                    lenght: 200,  // 3:20 = 200
                },
            isTimerOn: false,
            Timer: '',
            currentTime: 0,
        }
    }, 
    methods: {
        TimerOn: function () {
            this.isTimerOn = true
            
            if(this.currentTime == 0) {
                this.currentTime = this.music.lenght
            }

            this.Timer = setInterval(this.StartTimer, 500)
        },
        TimerOff: function() {
            this.isTimerOn = false
            clearInterval(this.Timer)
        },
        StartTimer: function() {
            this.currentTime--
        }
    },
    computed: {
        TimeLeft: function() {
            let minutes = parseInt(this.currentTime / 60, 10)
            let seconds = parseInt(this.currentTime % 60, 10)
            
            // minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds

            return `${minutes}:${seconds}`
        },
        BarWidth: function() {
            let width = this.currentTime == 0 ? 0 : parseFloat(100-(100*(this.currentTime/this.music.lenght))).toFixed(2)
            return {width: width + '%'}
        }
    }
}).mount('.container')