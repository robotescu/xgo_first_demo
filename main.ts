input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    xgo.move_xgo(xgo.direction_enum.Forward, 50)
    basic.pause(3000)
    xgo.move_xgo(xgo.direction_enum.Backward, 50)
    basic.pause(3000)
    xgo.init_action()
    xgo.rotate(xgo.rotate_enum.Right, 50)
    basic.pause(3000)
    xgo.rotate(xgo.rotate_enum.Left, 50)
    basic.pause(3000)
    xgo.execution_action(xgo.action_enum.Crawl_forward)
    basic.pause(7000)
    xgo.execution_action(xgo.action_enum.Pee)
    basic.pause(7000)
    xgo.execution_action(xgo.action_enum.Wave)
})
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.showIcon(IconNames.Asleep)