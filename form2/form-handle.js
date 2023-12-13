const options =["External Political", "Economics", "IT", "Science", "Sports"]

const init = () =>{


    let btn = document.querySelector('#btn-subscribe')
    btn.setAttribute('disabled', true)

    // ##############################
    renderOptions(options)


    let agreeCheckbox = document.querySelector('[name="terms"]') // css attribute selector
    agreementCheckboxHandler.onchange = agreementCheckboxHandler
}
const renderOptions = (options) =>{
let optionsDiv = document.getElementById('options')

options.forEach(option => {
let input = document.createElement('input')
input.setAttribute('type','checkbox')
input.setAttribute('name',`option_${option.toLowerCase().replace("","_")}`)


let text = document.createTextNode(option)
let br = document.createElement('br')
optionsDiv.appendChild(input)
optionsDiv.appendChild(text)
optionsDiv.appendChild(br)
})

}


const agreementCheckboxHandler = () =>{
    let agreeCheckbox = document.querySelector('[name="terms"]')
    let btn = document.querySelector('#btn-subscribe')
//     console.dir(agreementCheckbox.checked)
if(agreeCheckbox.checked){
btn.removeAttribute('disabled')
renderAgreementText("You've agreed to the terms and conditions")
}else{
    btn.setAttribute('disabled', true)
    
}
}


const renderAgreementText = (text) =>{
    let agreeLabel = document.getElementById('terms')
    let textNode = document.createTextNode(text)
    agreeLabel.removeChild(agreeLabel.lastElementChild)
    agreeLabel.appendChild(textNode)
}

// #############################
window.onload = init
