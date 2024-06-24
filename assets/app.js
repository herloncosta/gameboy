window.addEventListener('load', () => {

    alert('Press start to ON, and select to OFF')

    const screen = document.querySelector('.viewfinder')
    const btnStart = document.querySelector('.start')
    const btnSelect = document.querySelector('.select')
    const btnA = document.querySelector('.btn-a')
    const btnB = document.querySelector('.btn-b')
    const audioMario = document.querySelector('audio')

    const turnOnScreen = () => {
        // screen.style.background = "linear-gradient(56deg, rgba(34,193,195,1) 0%, rgba(255,255,255,1) 100%)"
        screen.style.backgroundImage = "url(https://i.pinimg.com/originals/7a/2a/12/7a2a124634168ba5cc31c46d74be60fa.gif)"
        screen.style.backgroundSize = "cover"
        screen.style.backgroundPosition = "center"
        screen.style.backgroundRepeat = "no-repeat"

        audioMario.play()
    }

    const turnOffScreen = () => {
        screen.style.background = "#000"
        audioMario.pause()
    }

    const changeGame = () => {
        screen.style.backgroundImage = "url(https://i.makeagif.com/media/12-13-2015/O2axWc.gif)"
    }

    btnStart.addEventListener('click', turnOnScreen)
    btnSelect.addEventListener('click', turnOffScreen)
    btnA.addEventListener('click', changeGame)
    btnB.addEventListener('click', turnOnScreen)
})