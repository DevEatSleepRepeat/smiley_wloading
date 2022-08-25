function LOAD () {
    basic.showLeds(`
        . # # . .
        # . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . . .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . # # .
        . . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . . . #
        . . . . #
        # . . . #
        . # # # .
        `)
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
}
let if_num = 1
basic.forever(function () {
    if (if_num == 1) {
        LOAD()
    }
    if_num = 0
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
