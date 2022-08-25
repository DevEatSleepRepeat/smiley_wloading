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
LOAD()
basic.forever(function () {
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
