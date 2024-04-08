input.onButtonPressed(Button.A, function () {
    time += -1
    time2 += -1
    basic.showNumber(time)
})
input.onButtonPressed(Button.B, function () {
    time += 1
    time2 += 1
    basic.showNumber(time)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    for (let index = 0; index < time; index++) {
        basic.showNumber(time2)
        time2 += -1
        basic.pause(800)
    }
    time2 = time
    music.play(music.stringPlayable("C - C - C - C - ", 120), music.PlaybackMode.LoopingInBackground)
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(50)
        basic.clearScreen()
        basic.pause(100)
    }
    music.stopAllSounds()
})
let time2 = 0
let time = 0
time = 10
time2 = 10
basic.showNumber(time)
