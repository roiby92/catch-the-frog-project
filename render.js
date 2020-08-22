const Renderer = function (){

    const createFrog = function(){
        return `<i class="fas fa-frog"></i>`
    }

  


    const render = function(){
        const $container = $('#main')
//$container.empaty()
        $container.append(createFrog())

    }


    return {render , createFrog}

}