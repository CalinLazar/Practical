


// https://api.openweathermap.org/data/2.5/weather?q=chisinau&appid=2310fdd535b63d44b43075bd1c4184c5&units=metric

const loadData = (cb) =>{

let xhr = new XMLHttpRequest()

xhr.open("GET","https://api.openweathermap.org/data/2.5/weather?q=chisinau&appid=2310fdd535b63d44b43075bd1c4184c5&units=metric")

xhr.send()


xhr.onload =() =>{
    let data = JSON.parse( xhr.responseText)
  //  console.log(">>", data.main.temp)
  cb(data)
}
}

const saveData = (data) =>{
  localStorage.setItem("data", JSON.stringify(data))
}

const render = (data) => {
console.log (data)
}

loadData(render)