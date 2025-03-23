
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

api.scalePlayerMeshNodes(myId, { "TorsoNode":[0.7,0.75,0.7], "HeadMesh":[0.9,0.9,0.9,], "ArmRightMesh":[1.2,1.2,1.2], "ArmLeftMesh":[1.2,1.2,1.2], "LegLeftMesh":[0.75,0.7,0.75], "LegRightMesh":[0.75,0.7,0.75] });

api.scalePlayerMeshNodes(myId, { "TorsoNode":[0.5,0.5,0.5],  "HeadMesh":[3,3,3,],  "ArmRightMesh":[1.2,1.2,1.2],  "ArmLeftMesh":[1.2,1.2,1.2],  "LegLeftMesh":[1,0.9,0.9],  "LegRightMesh":[1,0.9,0.9] });

stackableItems=["Toxin Ball","Timed Spike Bomb Block","Water","Lava",
"Invisible Solid","Block of Emerald","Iron Watermelon","Block of Lapis Lazuli",
"Melting Ice","Ice Bridge","Loot Chest","Faction Protector","Beacon","Gravel",
"Useless Soil","Fireball Block","Iceball Block","Grenade","Toxin Ball Block",
"Rocket","Super Rocket",
"Yellowstone","Sponge","Dim Lamp Off","Dim Lamp On","Chiseled Block of Quartz",
"Hay Bale","temp","UNUSED BLOCK TYPE","Mystery Block","Bouncy Bomb Block",
"Purple Paintball Explosive",
"Pink Paintball Explosive","Yellow Paintball Explosive",
"Red Paintball Explosive","Gray Paintball Explosive","Black Paintball Explosive",
"Blue Paintball Explosive","Light Blue Paintball Explosive",
"White Paintball Explosive","Cyan Paintball Explosive",
"Light Gray Paintball Explosive","Brown Paintball Explosive","Orange Balloon",
"Blue Balloon",
"Orange Popup Tower","Blue Popup Tower","Light Blue Popup Tower"
"Blue Strongbed","Light Blue Strongbed","Red Strongbed","Green Strongbed",
"Yellow Strongbed","Cyan Strongbed","Orange Strongbed","Gray Strongbed",
"Pink Strongbed","Lime Strongbed","White Strongbed","Black Strongbed",
"Brown Strongbed","Purple Strongbed","Light Gray Strongbed","Magenta Strongbed"
]
unstackableItems=["Red Paintball Gun","Orange Paintball Gun",
"Blue Paintball Gun",
"Orange Heavy Paintball Gun","Artisan Shears","Orange Paint Bow","Cornbread",
"Artisan Axe"]



for(x=0;x<stackableItems.length;x++)
{api.editItemCraftingRecipes(myId,
stackableItems[x], 
[{requires:[{items:["Stone"],amt: 1}], 
  produces: 999, 
  station:"Potion Table"}])}

for(x=0;x<unstackableItems.length;x++)
{api.editItemCraftingRecipes(myId,
unstackableItems[x],
[{requires:[{items:["Stone"],amt:1}],
produces: 1,
station:"Potion Table"}])}




api.log("Use the Potion table nearby to get insane illegal items")
