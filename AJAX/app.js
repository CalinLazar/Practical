
const input = form.children[2].firstElementChild

const output = form.children[3]

form.addEventListener('submit', (e)=>{
    //prevent form submission
    e.preventDefault()


    let name = input.value

    console.log(name)

    // AJAX
    const xhr = new XMLHttpRequest()

    xhr.open("GET",`https://api.nationalize.io/?name=${name}` )
    xhr.send()

    xhr.onload = () => {
        let response = xhr.responseText
        let data = JSON.parse(response)
        let nationality = data.country[0].country_id

        console.log(nationality)

        output.innerHTML = `You are most probabbly from this country <strong>${nationality}</strong>`
    }

    //1. send request() -> API
    //2. Wait for response(JSON) <- API
    //3. Extract data 
    //4. Display info
})

//                             URL
//                              |
//https://api.nationalize.io/?name={putNameHere}
