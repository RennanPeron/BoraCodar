let vm = Vue.createApp({
    data() {
        return {
            playlist: [
                {
                    name: 'Acorda Devinho',
                    artist: 'Banda Rocketseat',
                    lenght: 200,  // 3:20 = 200
                },
                {
                    name: 'Bora Codar Garota',
                    artist: 'Banda Rocketseat',
                    lenght: 262,  // 4:37 = 262
                },

            ],
            music: {
                name: 'Acorda Devinho',
                artist: 'Banda Rocketseat',
                lenght: 200,
            },
            isTimerOn: false,
            Timer: '',
            currentTime: 0,
            index: 0,
        }
    }, 
    methods: {
        TimerOn: function () {
            this.isTimerOn = true
            
            if(this.currentTime == 0) {
                this.currentTime = this.music.lenght
            }

            this.Timer = setInterval(this.StartTimer, 1000)
        },
        TimerOff: function() {
            this.isTimerOn = false
            clearInterval(this.Timer)
        },
        StartTimer: function() {
            this.currentTime--
            if(this.currentTime < 0) {
                this.Forward()
            }
        },
        StopTimer: function() {
            this.TimerOff()
            this.currentTime = 0
        },
        Forward: function() {
            this.index++
            if(this.index == this.playlist.length) {
                this.index = 0
            }
            clearInterval(this.Timer)
            this.currentTime = 0
            this.music = this.playlist[this.index]
            this.TimerOn()
        },
        Rewind: function () {
            this.index--
            if(this.index == this.playlist.length || this.index < 0) {
                this.index = 0
            }
            this.music = this.playlist[this.index]
        },
        TimeConverter: function(time) {
            let minutes = parseInt(time / 60, 10)
            let seconds = parseInt(time % 60, 10)
            
            seconds = seconds < 10 ? "0" + seconds : seconds
            
            return `${minutes}:${seconds}`
        },
    },
    computed: {
        TimeLeft: function() {
            return this.TimeConverter(this.currentTime)
        },
        MusicLenght: function() {
            return this.TimeConverter(this.music.lenght)
        },
        BarWidth: function() {
            let width = this.currentTime == 0 ? 0 : parseFloat(100-(100*(this.currentTime/this.music.lenght))).toFixed(2)
            return {width: width + '%'}
        }
    }
}).mount('.container')