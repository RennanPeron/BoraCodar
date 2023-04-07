let music = {
    name: 'Music 1',
    artist: 'Artist 1',
    musicLength: 5,  // 3:20 = 200
}

let isTimerOn = false
let currentTime = 0

const playButton = document.querySelector('#play');
playButton.addEventListener('click', function() {
    TimerOn(music.musicLength)
})


function TimerOn(duration) {
    let timer = duration
    isTimerOn = !isTimerOn;
    
    let Timer = setInterval(function() {
        if(!isTimerOn || timer <= 0){
            isTimerOn = false
            clearInterval(Timer)
        } else {
            // Se for undefined o timer acabou de ativar, se não ele já rolou antes;
            if(currentTime != timer && currentTime != 0) {
                timer = currentTime
            }
            let minutes = parseInt(timer / 60, 10)
            let seconds = parseInt(timer % 60, 10)
            
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds
            
            console.log(minutes + " : " + seconds)
            
            timer--
            currentTime = timer
        }
    
    }, 1000)
}