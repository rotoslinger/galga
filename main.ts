sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let dart: Sprite = null
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
. . . 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 1 1 1 c 1 1 1 1 . 
1 1 1 1 c 1 1 1 c 1 1 1 . 
1 c 1 1 c c 1 1 1 c c 1 . 
1 c c 1 1 1 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 1 1 1 1 . 
. 1 1 1 1 1 1 1 1 1 1 . . 
. . 1 1 1 1 1 1 1 1 . . . 
. . e 4 4 e 7 7 7 f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . f e e 8 6 6 6 f . . . 
. . . 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 . . . . . . 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(mySprite, 200, 200)
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(img`
f 4 f 4 4 4 4 4 4 4 
4 f 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 
f f 4 4 4 4 4 4 4 4 
f f 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 
f f f f 4 4 4 4 4 4 
4 4 4 4 f 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Enemy)
    mySprite2.setPosition(180, Math.randomRange(0, 120))
    mySprite2.setVelocity(-100, 0)
})
forever(function () {
    if (controller.A.isPressed()) {
        dart = sprites.createProjectileFromSprite(img`
2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 
2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 
2 2 2 4 2 2 2 2 2 2 2 2 2 4 2 2 
2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 
2 2 2 4 2 2 2 2 2 4 2 2 2 2 2 2 
4 2 2 2 2 4 4 2 2 2 2 2 2 2 2 2 
2 2 2 4 2 2 2 2 2 2 2 2 4 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 
2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 
2 2 2 2 4 2 2 4 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 4 
4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 4 2 2 2 2 4 2 2 2 2 2 4 2 2 2 
2 2 2 2 2 2 2 2 2 4 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 4 2 2 2 2 2 2 2 2 
`, mySprite, 200, 0)
        pause(100)
    }
})
