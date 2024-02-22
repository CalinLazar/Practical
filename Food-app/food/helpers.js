

// menu functionality
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports.printMenu = (menu, cb) =>{
menu.forEach(item => console.log(item.print()) );
let option = -1
rl.question(" Choose >>" , (option)=>{
cb(option)
})
}

module.exports.printMessage = (message) =>{
    console.log(`${message} >>`)
    }