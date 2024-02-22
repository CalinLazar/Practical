// // 1) SYNC
// function getData(json){
// let data = JSON.parse(json)
// return data
// }

// function app(){
//     try {
//         let data = getData( "{ \"name\": \"JAVASCRIPT\" }" )
//     console.log( data )
//     } catch (error) {
//         console.log( "DATA ERROR" )
//     }

// }

// app()

// 1) ASYNC-callback
function getData(json, cb) {
  let data;
  setTimeout(() => {
    try {
      data = JSON.parse(json);
      cb(data);
    } catch (error) {
      cb(null, "DATA ERROR");
    }
  }, 1000);
}

function app() {
    
  getData('{ "name": "JAVASCRIPT" }', (data, error) => {
    if (error) {
      console.log(data);
    } else {
        console.log(data)
    }
    console.log(data);
  });
}

app();

// node async-vs-sync/app.js
