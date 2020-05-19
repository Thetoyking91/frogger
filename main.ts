controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Frog.setPosition(0, Frog.y - 8)
})
let Frog: Sprite = null
Frog = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 7 7 7 7 . . . . . . . . . 
. . 7 7 7 7 7 7 7 . . . . . . . 
. 7 7 7 7 7 7 7 f 7 7 . . . . . 
. 7 7 7 7 7 7 7 7 7 7 7 . . . . 
. 7 7 7 7 7 7 7 7 7 7 . . . . . 
. . 7 7 7 7 7 7 7 . . . . . . . 
. . . 7 7 7 7 . . . . . . . . . 
. . . 7 . . 7 . . . . . . . . . 
. . . 7 . . 7 . . . . . . . . . 
. . . 7 7 . 7 7 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
