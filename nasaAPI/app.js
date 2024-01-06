const KEY = "tDyQii2EdCMoOC2fVj9gC1YhD1SUHheKE6eHDxk1";
let marsDate = '';

function updateURL() {
    marsDate = document.getElementById('marsDate').value;
}

function loadMarsRoverPhotosData() {
    const ENDPOINT_MARS_ROVER_PHOTOS = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1&api_key=${KEY}&earth_date=${marsDate}`;

    // let xhr = new XMLHttpRequest();
    // xhr.open("GET", ENDPOINT_MARS_ROVER_PHOTOS);

    // xhr.onload = parseMarsRoverPhotoData;

    // xhr.send();

    fetch(ENDPOINT_MARS_ROVER_PHOTOS)
    .then(response =>response.json())
    .then(parseMarsRoverPhotoData)
}

function parseMarsRoverPhotoData( data ){
    // let xhr = e.target
    // let data = JSON.parse(xhr.responseText)
    createGliderDOM(data)
}

function createGliderDOM( data ){
    let slidesContainer = document.querySelector('#gallery .glider')
    data.photos.forEach(photo => { 
        console.log(photo)
        let div = document.createElement('div')
        div.appendChild(document.createElement('img'))
        div.firstElementChild.src = photo.img_src
        div.appendChild(document.createElement('h2'))
        div.lastElementChild.innerText = photo.earth_date
        div.appendChild(document.createElement('h3'))
        div.lastElementChild.innerText = photo.camera.full_name
        slidesContainer.appendChild(div)
    } )

    newGlider()

    console.log(data)
}

function newGlider() {
new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  })
}