const FrogGame = function () {
    const frog = {
        x: Math.random() * 50,
        y: Math.random() * 50
    }

    let level = 1;
    const levelUp = () => level++

    const getLevel = () => level

    const getFrog = () => frog
    const getFrogX = () => frog.x
    const getFrogY = () => frog.y
    // const getSize

    // const playGame = function (level) {
    //     let randFrog
    //     if (level == 1) {
    //        return randFrog = frogs[Math.floor(Math.random() * frogs.length)]
    //     }else{
    //         for(let i=0;i<level;i++){

    //         }
    //     }

        return { levelUp, getLevel, getFrogX,getFrogY,getFrog } //playGame}
}


// const level1 = function () {
//     const rndFrog = frogs[Math.floor(Math.random() * frogs.length)]
//     return rndFrog

// const level2 = function () {

//     for (let i = 0; i <= 1; i++){
//         let rndFrog = frogs[Math.floor(Math.random() * frogs.length)]
//     }
// }


// return { level1 }







const forg = FrogGame()
