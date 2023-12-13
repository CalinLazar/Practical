//Design patterns | Strategy


function toP( value ){
    return `<p>${value}</p>`
}

function toH( value ){
    return `<h1>${value}</h1>`
}

/////////////////////////////

function add(a,b,   cb){ //  cb == callback
    let r = a + b
    return cb(r) // strongly coupled
}

function mul(a,b, cb){
    let r = a * b
    return cb(r) // strongly coupled
}


////////////////////////////
let outa = add(10,100, toP)
let outm = mul(10,100, toH)
console.log(outa)
console.log(outm)