
let wordList=["Hilo","Meow","ehehehehe","SKIbIDI TOILET ON MY MIND YEAH"];
randomNumber=Math.floor(Math.random() * 4)
let user="\[⚡\]\[🔧\]Arthur: " + wordList[randomNumber];
api.
broadcastMessage
(user)

api.setPlayerPose(myId,"zombie")

api.changePlayerIntoSkin(myId,"head","zombie")

api.setItemSlot(myId,0,"Unloaded", 1000,{
    customDisplayName: "custom name",
    customDescription: "custom description",
    });

    let [x, y, z] = thisPos
y += 1
api.playParticleEffect({
    dir1: [-1, -1, -1],
    dir2: [1, 1, 1],
    pos1: [x, y, z],
    pos2: [x + 1, y + 1, z + 1],
    texture: "bubble",
    minLifeTime: 1.2,
    maxLifeTime: 0.45,
    minEmitPower: 3,
    maxEmitPower: 4,
    minSize: 0.25,
    maxSize: 0.35,
    manualEmitCount: 20,
    gravity: [0, -10, 0],
    colorGradients: [
        {
            timeFraction: 0,
            minColor: [60, 60, 150, 1],
            maxColor: [200, 200, 255, 1],
        },
    ],
    velocityGradients: [
        {
            timeFraction: 0,
            factor: 1,
            factor2: 1,
        },
    ],
    blendMode: 1,
})

const speed = 965
api.sendFlyingMiddleMessage(myId, ["Subcribe to Squirrel_Meow_YT! Or else..."], speed)


api.applyEffect(myId, "Health Regen", null, { inbuiltLevel: 699999999})
api.applyEffect(myId, "Damage Reduction", null, { inbuiltLevel: 9199999})
api.applyEffect(myId, "Feather Falling", null, { inbuiltLevel: 69999})
api.applyEffect(myId, "Slowness", null, { inbuiltLevel: -1})
api.applyEffect(myId, "Haste", null, { inbuiltLevel: 99999969})
api.applyEffect(myId, "Jump Boost", null, { inbuiltLevel: 1})
