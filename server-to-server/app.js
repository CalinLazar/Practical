const http = require('http')
const {HOST,PATH,KEY} = require('./config')

let city = "Chisinau"

const callback = (res) =>{ // response or readable  stream 
    res.on('end', (chunk)=>{
        console.log(chunk.toString)
    })

    res.on('data', ()=>{
        console.log("API response data")
    })

    res.on('error', ()=>{
        console.log("API response ERROR")
    })


}

const req = http.request({
    host: HOST,
    path: PATH + `?q=${city}&appid=${KEY}}`,
    port:80,
    method:'GET'
}, callback)

req.end()

// , res =>{
//     req.end()
// }

// req.end()


// req.on('connect', ()=>{
//     console.log(' >>> got connected')
// })

// req.on('information', ()=>{
//     console.log(` got some info`)
// })

 