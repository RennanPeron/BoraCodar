let music = {
    name: 'Music 1',
    artist: 'Artist 1',
    musicLength: 5,  // 3:20 = 200
}

let isTimerOn = false
let currentTime = 0

const playButton = document.querySelector('#play');
playButton.addEventListener('click', function() {
    let timer = music.musicLength
    TimerOn(timer)
})


function TimerOn(timer) {
    isTimerOn = !isTimerOn;
    let remainingTimeElement = document.querySelector(".remaining-time")
    let progressFillElement = document.querySelector(".progress-bar-fill")
    
    if (currentTime < 0){
        timer = music.musicLength
    } else if(currentTime != timer) {
        timer = currentTime
    } 
    
    if(isTimerOn) {
        playButton.src = "img/pause-solid.svg"

    } else {
        playButton.src = "img/play.svg"
        
    }
    
    let Timer = setInterval(function() {
        if(!isTimerOn || timer < 0){
            isTimerOn = false
            playButton.src = "img/play.svg"
            clearInterval(Timer)
        } else {
            // Se for undefined o timer acabou de ativar, se não ele já rolou antes;
            let minutes = parseInt(timer / 60, 10)
            let seconds = parseInt(timer % 60, 10)
            
            // minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds
            
            let percentage = parseFloat(100-(100*(timer/music.musicLength))).toFixed(2)
            
            progressFillElement.style.width = percentage + "%";
            remainingTimeElement.innerText = minutes + ":" + seconds;
            
            timer--
            currentTime = timer
        }
    }, 1000)
}