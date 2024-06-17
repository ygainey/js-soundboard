const buttons = document.querySelectorAll('button')
console.dir(buttons)
const audio = document.querySelector('audio')
console.dir(audio)

// const music =[
//     "./sounds/work_it.wav",
//     "./sounds/make_it.wav",
//     "./sounds/do_it.wav",
//     "./sounds/makes_us.wav",
//     "./sounds/harder.wav" ,
//     "./sounds/better.wav",
//     "./sounds/faster.wav",
//     "./sounds/stronger.wav",
//     "./sounds/more_than.wav",
//     "./sounds/hour.wav",
//     "./sounds/our.wav",
//     "./sounds/never.wav",
//     "./sounds/ever.wav",
//     "./sounds/after.wav",
//     "./sounds/work_is.wav",
//     "./sounds/over.wav"
// ]

// let ind = 0

// audio.forEach((evt) => {
//     evt.setAttribute('src', music[ind])
//     ind++
// })

function playAudio(evt){
    //console.log(evt.target.id)
    //console.log(`./sounds/${evt.target.id}.wav`)
    audio.src =`./sounds/${evt.target.id}.wav`
    audio.play()
}

buttons.forEach((button) =>{
    button.addEventListener('click', playAudio)
})


