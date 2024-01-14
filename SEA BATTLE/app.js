
let layers =[
    {
        ship:false,
        torpedo:false 
       },

       {
        ship:false,
        torpedo:false 
       },

       {
        ship:false,
        torpedo:false 
       },

       {
        ship:false,
        torpedo:false 
       },

       {
        ship:false,
        torpedo:true 
       },

       {
        ship:true,
        torpedo:false 
       },

       {
        ship:false,
        torpedo:false 
       }
       
]



const render =() =>{
let seaDiv = document.querySelector('.sea')

for(let i=0; i<=9; i++){

    let objects = ``

    if(layers[i].ship){
        objects += `<div class="ship"></div>`
    }

    seaDiv.innerHTML +=`<div class="layer"> <!--layer ${i} -->
         ${objects}
    <div class="wave"></div>
 </div>`
}
}
render()