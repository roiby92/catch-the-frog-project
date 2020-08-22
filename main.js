const frogGame = FrogGame()
const render = Renderer();







render.render(frogGame.getFrog())
$('#main').on('click', '.frog', function () {
    let frog = $(this)
    frog.remove()
    render.render(frogGame.getFrog())
})