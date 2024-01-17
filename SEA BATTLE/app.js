let layers = [
    {
        ship: false,
        rochet: false,
        explosion: false,
    },
    {
        ship: false,
        rochet: false,
        explosion: false,
    },
    {
        ship: false,
        rochet: false,
        explosion: false,
    },
    {
        ship: false,
        rochet: false,
        explosion: false,
    },
    {
        ship: false,
        rochet: false,
        explosion: false,
    },
    {
        ship: false,
        rochet: false,
        explosion: false,
    },
    {
        ship: false,
        rochet: false,
        explosion: false,
    },
    {
        ship: false,
        rochet: false,
        explosion: false,
    },
    {
        ship: false,
        rochet: false,
        explosion: false,
    },
    {
        ship: false,
        rochet: false,
        explosion: false,
    },
];

let ship = {
    x: -600,
    dir: -1,
    layer: 1,
};

let scope = {
    x: 0,
};

let rocket = {
    x: 800,
    layer: 1,
    shoot: false,
};

let explosion = {
    x: 800,
    layer: 1,
};

let timerShip;
let timerRocket;
let ridx;
let score = 0;
let explosionTimer;

let seaDiv = document.querySelector('.sea');

const render = () => {
    
    seaDiv.innerHTML = ``

    for(let i = 0; i <=9; i++) {

        let objects = ``
        
        if(layers[i].ship) {
            objects += `
            <div class="ship" style="left: ${ship.x}px">
                <div class="hull">
                    <div class="gun">
                        <div class="tube"></div>
                    </div>
                    <div class="gun_front">
                        <div class="tube"></div>
                    </div>
                    <div class="gun_top">
                        <div class="tube"></div>
                    </div>
                    <div class="base"></div>
                    <div class="on_base"></div>
                    <div class="on_on_base"></div>
                    <div class="square_one"></div>
                    <div class="square_two"></div>
                    <div class="square_three"></div>
                    <div class="square_four"></div>
                </div>
                <div class="bridge"></div>
                <div class="chimney"></div>
            </div>
            `
        }
        if(layers[i].rochet) {
            objects += `
            <div class="rocket" 
            style="left: ${rocket.x}px;">
                <div class="head"></div>
                <div class="body"></div>
                <div class="tail"></div>
                <div class="wing_1"></div>
                <div class="wing_2"></div>
                <div class="wing_3"></div>
                <div class="wing_4"></div>
            </div>            
            `
        }

        if(layers[i].ship == layers[i].rochet) {             
            objects += `
            <div class="explosion" style="left: ${explosion.x}px;">
                <div class="fire-bottom-sm"></div>
                <div class="fire-bottom-md"></div>
                <div class="fire-bottom-lg"></div>
            </div>            
            `
        }

        seaDiv.innerHTML += `
        <div class="layer"> <!-- layer ${i} -->
            ${objects}
            <div class="wave"></div>
        </div>
        `
    }

    seaDiv.innerHTML += `
    <div class="scope" style="left: ${scope.x}px;">
        <div class="mid">+</div>
        <div class="h">--</div>
        <div class="v">--</div>
    </div>
    `
}

const scoreRender = () => {
    let scoreDiv = document.getElementById('score')
    scoreDiv.textContent = score
}
// move scope along the X axis
const moveScope = (e) => {
    scope.x = e.clientX - 100;
    render();
};

const shoot = (e) => {
    if (e.code === 'Space' && !rocket.shoot) {
        rocket.shoot = true;
        rocket.layer = ship.layer; 
        rocket.x = scope.x + 670;
        layers[rocket.layer].rochet = true;

        clearInterval(timerRocket);

        timerRocket = setInterval(() => {
            if (rocket.layer === 9) {
                clearInterval(timerRocket);
                rocket.shoot = false;
                layers[rocket.layer].rochet = false;
            } else {
                layers[rocket.layer].rochet = false;
                rocket.layer++;
                layers[rocket.layer].rochet = true;

                if (
                    rocket.layer === ship.layer &&
                    Math.abs(rocket.x - ship.x) < 400 &&
                    Math.abs(rocket.x - ship.x) > 350 
                ) {
                    alert('Boom! Ship hit!');
                    stopShip();
                    resetShip();
                    score += 10;
                    scoreRender();
                }
            }
        }, 200);
    }
};

const stopShip = () => {
    clearInterval(timerShip);
};

const resetShip = () => {
    stopShip();

    for (let i = 0; i < layers.length; i++) {
        layers[i].ship = false;
        layers[i].explosion = false;
    }

    ridx = Math.floor(Math.random() * 10);
    ship.layer = ridx;
    layers[ridx].ship = true;
    layers[ridx].explosion = true;

    let rand = Math.random();

    if (rand >= 0.5) {
        ship.x = innerWidth + 600;
        ship.dir = ship.dir;
    } else {
        ship.x = -600;
        ship.dir = 1;
    }

    timerShip = setInterval(() => {
        ship.x += ship.dir;

        if (ship.dir == 1 && ship.x > innerWidth + 600) {
            resetShip();
        }
        if (ship.dir == -1 && ship.x < -600) {
            resetShip();
        } 
        render();
    }, 1);
};

// window.addEventListener('resize', () => {
//   resetShip()
//   render()
// });

resetShip();
scoreRender();
render();

document.addEventListener('keydown', shoot);
document.addEventListener('mousemove', moveScope);