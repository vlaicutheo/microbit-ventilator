input.onButtonPressed(Button.A, function () {
    while (duty < 1023) {
        pins.analogWritePin(AnalogPin.P0, duty)
        duty = duty + 1
        basic.pause(5)
    }
    basic.showNumber(duty)
})
input.onButtonPressed(Button.B, function () {
    while (duty > 0) {
        pins.analogWritePin(AnalogPin.P0, duty)
        duty = duty - 1
        basic.pause(5)
    }
    basic.showNumber(duty)
})
let duty = 0
duty = 0
