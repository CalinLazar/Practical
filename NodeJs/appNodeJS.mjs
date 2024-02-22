//weather
//global module

import * as readline from 'node:readline'
import {stdin as input, stdout as output} from 'node:process'


//custom module / local
import { data_week } from "./data.mjs";


const io = readline.createInterface({input, output})

io.on(
  'line', day_number =>{
    console.log(day_number, typeof day_number)
  }
)

io.question('Choose the day [1...7]: ' ,day_number =>{
  console.log(day_number, typeof day_number)
})


// data_week.forEach(day => {
//     console.log(`[${day.date}]: ${day.temp}`)
// });


//interaction

//   node NodeJs/appNodeJS.mjs