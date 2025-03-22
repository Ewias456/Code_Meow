
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