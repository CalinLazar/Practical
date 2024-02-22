
let {menu,printMenu, printMessage} = require('./food')

let option





function mainLoop() {
    printMenu(menu, (option) => {
        console.log("you've chosen...", option)
        if(option != ""){
        setTimeout(mainLoop, 500)
    }
    })
    
    
}

mainLoop()

// printMessage( "Choose an option" )


//node Food-app/cli-app.js