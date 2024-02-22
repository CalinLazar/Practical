const fs = require('fs')

let data = {name: "Salad"}
fs.writeFileSync("./data/food.json",JSON.stringify(data))

// let name = "Salad"
// fs.writeFileSync("./data/name.txt", name)