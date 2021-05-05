controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.vy == 0) {
        Player1.vy += -120
    }
    if (Player1.tileKindAt(TileDirection.Right, assets.tile`myTile`)) {
        Player1.vy += -80
    }
})
let Player1: Sprite = null
Player1 = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
Player1.ay = 180
tiles.setWallAt(tiles.getTileLocation(0, 0), true)
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
controller.moveSprite(Player1, 100, 0)
forever(function () {
    scene.cameraFollowSprite(Player1)
})
