let button = document.querySelectorAll(".button")

function clickEffect() {
    button.forEach(e => {
        e.addEventListener("mouseover", () => {
            e.style.transform = 'scale(0.8)';
            e.style.transition = 'all .2s ease-in-out';
            setTimeout(() => {
                e.style.transform = '';
            }, 200);
        })
    })
}

let currFormation = document.querySelector("#TeamStrategie")
let F_T_T = document.querySelector(".F-T-T")
let cardToMove = document.querySelectorAll(".card")
let att = document.querySelector(".att").querySelectorAll(".card")
let mid = document.querySelector(".mid").querySelectorAll(".card")
let def = document.querySelector(".def").querySelectorAll(".card")
function Move() {
    currFormation.addEventListener("change", () => {
        if (currFormation.value === '4-3-3') {
            mid[1].style.transform = "translateY(20px)"
            def[2].style.transform = "translateY(20px)"
            def[1].style.transform = "translateY(20px)"
            F_T_T.style.display = 'flex'
        } else {
            F_T_T.style.display = 'none'
        }
    })
}
Move()

let playersContainer = document.querySelector(".playersDisplay")
let playersData;
let statistics;
async function fetch0() {
    const response = await fetch("http://localhost:3000/players", {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        },
    });

    if (!response.ok) {
        console.log(`HTTP error! Status: ${response.status}`);
    }

    playersData = await response.json();
    playersData.forEach(e => {
        let position = e.position;
        let rating = e.rating;
        let name = e.name;
        let nationality = e.nationality;
        let flag = e.flag;
        let logo = e.logo;
        let photo = e.photo;
        let club = e.club;
        let cardTemplate = `<div class="card ${position}">
                            <img class="backgroung" src="./media/badge0.png" alt="">
                            <div class="info">
                                <h3 class="rating">${rating}</h3>
                                <h3 class="position">${position}</h3>
                            </div>
                            <div class="photo">
                                <img src="${photo}" alt="">
                            </div>
                            <div class="name">${name}</div>
                            <div class="info1">
                                <div class="flag">
                                    <img src="${flag}" alt="${nationality}">
                                </div>
                                <div class="club">
                                    <img src="${logo}" alt="${club}">
                                </div>
                            </div>
                        </div>`
        if (e.position === "GK") {
            let div = e.div;
            let han = e.han;
            let kic = e.kic;
            let ref = e.ref;
            let spe = e.spe;
            let pos = e.pos;
            statistics = `<div class="statistics">
                                <div class="div"><span>div</span><br><span>${div}</span></div>
                                <div class="han"><span>han</span><br><span>${han}</span></div>
                                <div class="kic"><span>kic</span><br><span>${kic}</span></div>
                                <div class="ref"><span>ref</span><br><span>${ref}</span></div>
                                <div class="spe"><span>spe</span><br><span>${spe}</span></div>
                                <div class="pos"><span>pos</span><br><span>${pos}</span></div>
                            </div>`;
        } else {
            let pac = e.pac;
            let sho = e.sho;
            let pas = e.pas;
            let dri = e.dri;
            let Def = e.def;
            let phy = e.phy
            statistics = `<div class="statistics">
                                <div class="pac"><span>pac</span><br><span>${pac}</span></div>
                                <div class="sho"><span>sho</span><br><span>${sho}</span></div>
                                <div class="pas"><span>pas</span><br><span>${pas}</span></div>
                                <div class="dri"><span>dri</span><br><span>${dri}</span></div>
                                <div class="Def"><span>Def</span><br><span>${Def}</span></div>
                                <div class="phy"><span>phy</span><br><span>${phy}</span></div>
                            </div>`;
        }
        playersContainer.innerHTML += cardTemplate
        let addedPlayers = playersContainer.querySelectorAll(".card")
        addedPlayers[addedPlayers.length - 1].innerHTML += statistics;
    })

    global()
}
fetch0();

let AttCards = [];
let MidCards = [];
let DefCards = [];
let KepCards = [];

function global() {
    let addedPlayers = playersContainer.querySelectorAll(".card")
    let cards = document.querySelectorAll(".shadow")
    function playerAppeand() {
        cards.forEach(e => {
            e.addEventListener("click", () => {
                console.log("Click To Add");
                playersContainer.innerHTML = ''
                let role = e.parentElement.className;
                if (role === 'att') {
                    console.log("Att");
                    AttCards.forEach(e => playersContainer.appendChild(e));
                }
                else if (role === 'mid') {
                    console.log("mid");
                    MidCards.forEach(e => playersContainer.appendChild(e));
                }
                else if (role === "def") {
                    console.log("def");
                    DefCards.forEach(e => playersContainer.appendChild(e));
                }
                else {
                    console.log("Kep");
                    KepCards.forEach(e => playersContainer.appendChild(e));
                }
            })
        })
    }

    function Filter() {
        addedPlayers.forEach(e => {
            let position = e.className;

            if (!position.includes("occupied")) {
                if (position.includes("RW") || position.includes("LW") || position.includes("ST")) {
                    AttCards.push(e)
                }
                if (position.includes("CM") || position.includes("LM") || position.includes("RM")) {
                    MidCards.push(e)
                }
                if (position.includes("CB") || position.includes("LB") || position.includes("RB")) {
                    DefCards.push(e)
                }
                if (position.includes("GK")) {
                    KepCards.push(e)
                }
            } else {
                console.log(`${position} didn't pass!!`);

            }
        })
    }
    Filter()
    playerAppeand()

    let formulaireCards = document.querySelectorAll(".stadiumCard");
    let Classes = formulaireCards[0].className;
    let classToAdd = Classes.split(' ');
    function mod() {
        formulaireCards.forEach(e => {
            e.addEventListener("click", () => {
                // console.log(e);
                // console.log(this);

                // formulaireCards.forEach(j => {
                //     j.style.scale = 1;
                // })
                // e.style.scale = 1.2
                // e.style.transition = 'all .3s ease'
                // flag = true;
                let playersContainer = document.querySelector(".playersDisplay").querySelectorAll(".card");
                playersContainer.forEach(i => {
                    console.log(1);

                    i.addEventListener("click", () => {
                        console.log(e);

                        
                        e.innerHTML = i.innerHTML;
                        // e.className = '';
                        // classToAdd.forEach(Class => e.classList.add(Class))
                        // i.classList.add("occupied")
                        //mod()
                        // Filter()

                    }, { once: true })

                })
            }, { once: true })
            // console.log(e)
            // playersContainer.querySelectorAll(".card").forEach(e => {
            //     if (e.className.includes("occupied")) {
            //         e.outerHTML = ''
            //     }
            // })
        })
    }
    mod()
    function handleSwitch(output, input) {
        output.innerHTML = input.innerHTML
    }
}