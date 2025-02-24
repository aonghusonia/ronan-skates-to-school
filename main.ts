controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Ronan)
    Ronan.setImage(assets.image`myImage6`)
    Update_speed(speed + 1)
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    speed += 1
    Update_speed(speed + 1)
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Ronan,
    assets.animation`myAnim0`,
    1000,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    Ronan.x += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Ronan.x += -1
    animation.stopAnimation(animation.AnimationTypes.All, Ronan)
    Ronan.setImage(assets.image`myImage0`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Ronan.x += 1
    animation.stopAnimation(animation.AnimationTypes.All, Ronan)
    Ronan.setImage(assets.image`myImage5`)
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    speed += -1
    Update_speed(speed - 1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Ronan)
    Ronan.setImage(assets.image`myImage4`)
    Update_speed(speed - 1)
})
function Update_speed (num: number) {
    if (num < 80 && num > 9) {
        speed = num
        for (let TrashCan of sprites.allOfKind(SpriteKind.Enemy)) {
            TrashCan.setVelocity(0, num)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Update_speed(10)
    sprites.destroy(otherSprite)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    Ronan.x += -1
})
let TrashCan: Sprite = null
let DistanceTravelled = 0
let speed = 0
let Ronan: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
Ronan = sprites.create(assets.image`myImage9`, SpriteKind.Player)
Ronan.setPosition(80, 110)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ......................3.........................................................................................................................................
    .....................3..........................................................................................................................................
    ....................3...........................................................................................................................................
    ...................3............................................................................................................................................
    ...................3............................................................................................................................................
    ..................3.............................................................................................................................................
    .................3..............................................................................................................................................
    .................3..............................................................................................................................................
    ................3...............................................................................................................................................
    ...............3................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
animation.runImageAnimation(
Ronan,
assets.animation`myAnim0`,
1000,
true
)
speed = 50
let LastTrashCan = 0
let NextTrashCan = 100
game.onUpdateInterval(100, function () {
    DistanceTravelled += speed / 10
    if (DistanceTravelled - LastTrashCan > NextTrashCan) {
        LastTrashCan = DistanceTravelled
        NextTrashCan = randint(80, 120)
        TrashCan = sprites.create(assets.image`myImage2`, SpriteKind.Enemy)
        TrashCan.bottom = 0
        TrashCan.left = 48 + randint(0, 3) * 16
        TrashCan.setFlag(SpriteFlag.AutoDestroy, true)
        TrashCan.setVelocity(0, speed)
    }
})
