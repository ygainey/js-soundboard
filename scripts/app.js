const buttons = document.querySelectorAll('button')
console.dir(buttons)
const audios = document.querySelectorAll('audio')
console.dir(audios)

const music =[
    "./sounds/work_it.wav",
    "./sounds/make_it.wav",
    "./sounds/do_it.wav",
    "./sounds/makes_us.wav",
    "./sounds/harder.wav" ,
    "./sounds/better.wav",
    "./sounds/faster.wav",
    "./sounds/stronger.wav",
    "./sounds/more_than.wav",
    "./sounds/hour.wav",
    "./sounds/our.wav",
    "./sounds/never.wav",
    "./sounds/ever.wav",
    "./sounds/after.wav",
    "./sounds/work_is.wav",
    "./sounds/over.wav"
]

let ind = 0
audios.forEach((evt) => {
    evt.setAttribute('src', music[ind])
    ind++
})

const playAudio = (evt) =>{
    // audios.playAudio()
    audios.play()
}

buttons.forEach((button) =>{
    button.addEventListener('click', playAudio)
})


