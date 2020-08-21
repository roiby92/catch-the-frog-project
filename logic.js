const FrogGame = function () {
    const frogs = [
        { id: 'vs', size: "very-small" },
        { id: 's', size: "small" },
        { id: 'm', size: "medium" },
        { id: 'l', size: "large" },
    ];

    const level1 = function () {
        const rndFrog = frogs[Math.floor(Math.random() * frogs.length)]
        return rndFrog
    }

    const level2 = function () {

        for (let i = 0; i <= 1; i++){
            let rndFrog = frogs[Math.floor(Math.random() * frogs.length)]
        }
    }


    return { level1 }
}






const forg = FrogGame()
