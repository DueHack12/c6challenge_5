input.onButtonPressed(Button.A, function () {
    time += -100
    time2_count += -1
    basic.showNumber(time2_count)
})
input.onButtonPressed(Button.B, function () {
    time += 100
    time2_count += 1
    basic.showNumber(time2_count)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    time_save = time2_count
    for (let index = 0; index < time / 100; index++) {
        basic.showNumber(time2_count)
        time2_count += -1
        basic.pause(800)
    }
    time2_count = time_save
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
let time_save = 0
let time2_count = 0
let time = 0
time = 1000
time2_count = 10
basic.showNumber(time2_count)
