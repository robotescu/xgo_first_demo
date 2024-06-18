input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    xgo.execution_action(xgo.action_enum.Squat)
})
input.onButtonPressed(Button.B, function () {
    xgo.execution_action(xgo.action_enum.Pee)
    basic.pause(7000)
    xgo.execution_action(xgo.action_enum.Wave)
    basic.pause(3000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    xgo.execution_action(xgo.action_enum.Triaxial_rotation)
    basic.pause(3000)
    xgo.init_action()
    xgo.move_xgo(xgo.direction_enum.Forward, 50)
    basic.pause(3000)
    xgo.init_action()
    xgo.execution_action(xgo.action_enum.Go_prone)
    basic.pause(3000)
    xgo.init_action()
    xgo.execution_action(xgo.action_enum.Whirl)
    basic.pause(3000)
    xgo.init_action()
    basic.showIcon(IconNames.Happy)
    music2 = 1
    xgo.execution_action(xgo.action_enum.Play_pendulum)
    basic.pause(3000)
    xgo.execution_action(xgo.action_enum.Request_feeding)
    basic.pause(3000)
    xgo.execution_action(xgo.action_enum.Looking_for_food)
    basic.pause(5000)
    xgo.execution_action(xgo.action_enum.Play_pendulum)
    basic.pause(3000)
    music2 = 0
})
let music2 = 0
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    if (music2 == 1) {
        music.play(music.stringPlayable("G B A G C5 B A B ", 340), music.PlaybackMode.UntilDone)
    }
})
