input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.pause(3000)
    basic.clearScreen()
})
let steps = 0
steps = 0
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1500) {
        steps += 1
    }
})
