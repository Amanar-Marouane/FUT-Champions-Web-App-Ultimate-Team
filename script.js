let button = document.querySelectorAll(".button")
let info = document.querySelector(".info")

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

let modTime = document.querySelector(".allPlayers")
let menu = document.querySelector(".menu")
let GetBackToMenu = document.querySelector(".quit")
let flag = false;
let addPlayer = document.querySelector(".addPlayer")
let addNewPlayer = document.querySelector(".addNewPlayer")
let Preview = document.querySelector(".preview")
let formToSend = document.querySelector("#formToSend")

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
        let card = e.card;

        if (card === undefined) {
            card = "./media/badge0.png"
        }
        let cardTemplate = `<div class="card ${position}">
                            <img class="backgroung" src="${card}" alt="">
                            <img class="backgroung" id="delete" src="./media/delete.svg" alt="">
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

    modTime.addEventListener("click", () => {
        playersContainer.style.display = 'grid'
        menu.style.display = 'none'
        GetBackToMenu.style.display = 'block'
        addNewPlayer.style.display = "none"
        Preview.style.display = 'none'
        F_T_T.style.display = 'flex'
        flag = true;
        global()
    })

    GetBackToMenu.addEventListener("click", () => {
        playersContainer.style.display = 'none'
        menu.style.display = 'flex'
        GetBackToMenu.style.display = 'none'
        addNewPlayer.style.display = "none"
        Preview.style.display = 'none'
        F_T_T.style.display = 'flex'
        flag = false;
    })

    addPlayer.addEventListener("click", () => {
        addNewPlayer.style.display = "flex"
        menu.style.display = 'none'
        GetBackToMenu.style.display = 'block'
        Preview.style.display = 'flex'
        F_T_T.style.display = 'none'
        flag = false;
    })
}
fetch0();

let AvAttCards = [];
let AvMidCards = [];
let AvDefCards = [];
let AvKepCards = [];

let OccAttCards = [];
let OccMidCards = [];
let OccDefCards = [];
let OccKepCards = [];

function global() {
    let addedPlayers = playersContainer.querySelectorAll(".card")
    let cards = document.querySelectorAll(".shadow")
    function playerAppeand() {
        cards.forEach(e => {
            e.addEventListener("click", () => {
                playersContainer.innerHTML = ''
                let role = e.parentElement.className;
                if (role === 'att') {
                    AvAttCards.forEach(e => playersContainer.appendChild(e));
                }
                else if (role === 'mid') {
                    AvMidCards.forEach(e => playersContainer.appendChild(e));
                }
                else if (role === "def") {
                    AvDefCards.forEach(e => playersContainer.appendChild(e));
                }
                else {
                    AvKepCards.forEach(e => playersContainer.appendChild(e));
                }
            })
        })
    }

    function Filter() {
        addedPlayers.forEach(e => {
            let position = e.className;
            if (position.includes("RW") || position.includes("LW") || position.includes("ST")) {
                AvAttCards.push(e)
            }
            if (position.includes("CM") || position.includes("LM") || position.includes("RM")) {
                AvMidCards.push(e)
            }
            if (position.includes("CB") || position.includes("LB") || position.includes("RB")) {
                AvDefCards.push(e)
            }
            if (position.includes("GK")) {
                AvKepCards.push(e)
            }
            playerAppeand()
        })
    }
    Filter()

    let formulaireCards = document.querySelectorAll(".stadiumCard");
    function mod() {
        formulaireCards.forEach(e => {
            e.onclick = () => {
                formulaireCards.forEach(j => {
                    j.style.scale = 1;
                })
                e.style.scale = 1.2
                e.style.transition = 'all .3s ease'
                let playersContainer = document.querySelector(".playersDisplay").querySelectorAll(".card");
                playersContainer.forEach(i => {
                    i.onclick = () => {
                        e.innerHTML = i.innerHTML;
                        e.classList.add('occupied')
                        switchHandler(e)
                    }
                })
            }
        })
    }
    if (flag === true) {
        mod()
    }

    function switchHandler(e) {
        let position = e.parentElement.className;
        if (position === "att") {
            cardSwitch(AvAttCards, OccAttCards, e);
            update(AvAttCards, OccAttCards, e)
        }
        if (position === "mid") {
            cardSwitch(AvMidCards, OccMidCards, e);
            update(AvMidCards, OccMidCards, e)
        }
        if (position === "def") {
            cardSwitch(AvDefCards, OccDefCards, e);
            update(AvDefCards, OccDefCards, e)
        }
        if (position === "kep") {
            cardSwitch(AvKepCards, OccKepCards, e);
            update(AvKepCards, OccKepCards, e)
        }
    }

    function cardSwitch(Avarr, Occarr, e) {
        let index = Avarr.findIndex(card => card.innerHTML === e.innerHTML);
        Occarr.push(Avarr[index])
        Avarr.splice(index, 1)
    }

    function update(Avarr, Occarr, e) {
        let tempArr = []
        e.parentElement.querySelectorAll(".occupied").forEach(e => {
            tempArr.push(e)
        })

        let tempNames = tempArr.map(card => card = card.querySelector(".name").innerHTML);
        let itemsToMove = [];

        for (let i = 0; i < Occarr.length; i++) {
            let nameToCom = Occarr[i].querySelector(".name").innerHTML
            if (!tempNames.includes(nameToCom)) {
                itemsToMove.push(Occarr[i]);
                Occarr.splice(i, 1);
            }
        }

        itemsToMove.forEach(item => {
            Avarr.push(item);
        });

        let playersContainer = document.querySelector(".playersDisplay");
        playersContainer.innerHTML = ''
        Avarr.forEach(e => {
            playersContainer.appendChild(e)
        })

        enhace()
    }
    function enhace() {
        let toHide = F_T_T.querySelectorAll("#delete")
        if (toHide) {
            toHide.forEach(e => {
                e.style.display = "none"
            })
        }
    }

    function removeClickHandling() {
        let btn = document.querySelectorAll("#delete")
        btn.forEach((e, i) => {
            e.addEventListener("click", () => {
                let parentDiv = e.parentElement.parentElement.className;
                if (parentDiv === "playersDisplay") {
                    let id = playersData[i].id
                    Delete(id)
                }
            })
        })
    }
    removeClickHandling()

    async function Delete(id) {
        const response = await fetch(`http://localhost:3000/players/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            console.log(`HTTP error! Status: ${response.status}`);
        }
        if (response.ok) {
            console.log(`Item with ID ${id} has been deleted.`);
        } else {
            console.error(`Failed to delete item with ID ${id}.`);
        }
    }
}

let PlayerName = document.querySelector("#PName")
let PlayerRating = document.querySelector("#Prating")
let PlayerPosition = document.querySelector("#Pposition")
let PlayerPhoto = document.querySelector("#Pphoto")
let PlayerCardImg = document.querySelector("#PcardImg")
let PlayerClubImg = document.querySelector("#PclubImg")
let PlayerStatics = document.querySelector(".Pstatics")
let previewCard = document.querySelector(".previewCard")
let nameToPreview = previewCard.querySelector(".name")
let ratingToPreview = previewCard.querySelector(".rating")
let photoToPreview = previewCard.querySelector(".photo").querySelector("img")
let flagToPreview = previewCard.querySelector(".flag").querySelector("img")
let clubToPreview = previewCard.querySelector(".club").querySelector("img")
let PositionToPreview = previewCard.querySelector(".position")
let CPositionToPreview = previewCard.querySelector(".CPostion").querySelector("p")
let CardImgToPreview = previewCard.querySelector("img")
let statisticsToPreview = previewCard.querySelector(".statistics").querySelectorAll("div")
let fetchCard = document.querySelector(".fetchCard")
let inputsToValid = document.querySelector(".addNewPlayer").querySelectorAll("input")

let CardToFetch = {}

document.addEventListener("DOMContentLoaded", function () {
    function CardPreview() {
        PlayerName.addEventListener("input", () => {
            nameToPreview.innerHTML = PlayerName.value
        })

        PlayerRating.addEventListener("input", () => {
            if (PlayerRating.value > 100) {
                PlayerRating.value = 100;
            }
            if (PlayerRating.value < 0) {
                PlayerRating.value = 0;
            }
            ratingToPreview.innerHTML = PlayerRating.value
        })

        PlayerPhoto.addEventListener("input", () => {
            photoToPreview.src = PlayerPhoto.value
        })

        PlayerClubImg.addEventListener("input", () => {
            clubToPreview.src = PlayerClubImg.value
        })

        PlayerCardImg.addEventListener("input", () => {
            CardImgToPreview.src = PlayerCardImg.value
        })

        let st = PlayerStatics.querySelectorAll("input")
        PositionToPreview.innerHTML = PlayerPosition.value
        CPositionToPreview.innerHTML = PlayerPosition.value
        PlayerPosition.addEventListener("change", () => {
            PositionToPreview.innerHTML = PlayerPosition.value
            CPositionToPreview.innerHTML = PlayerPosition.value
            if (PlayerPosition.value === "GK") {
                st[0].placeholder = "div"
                st[1].placeholder = "han"
                st[3].placeholder = "kic"
                st[3].placeholder = "ref"
                st[4].placeholder = "spe"
                st[5].placeholder = "pos"
                st[0].name = "div"
                st[1].name = "han"
                st[3].name = "kic"
                st[3].name = "ref"
                st[4].name = "spe"
                st[5].name = "pos"
            } else {
                st[0].placeholder = "pac"
                st[1].placeholder = "pas"
                st[3].placeholder = "dri"
                st[3].placeholder = "phy"
                st[4].placeholder = "sho"
                st[5].placeholder = "def"
                st[0].name = "pac"
                st[1].name = "pas"
                st[3].name = "dri"
                st[3].name = "phy"
                st[4].name = "sho"
                st[5].name = "def"
            }
        })

        st.forEach((e, i) => {
            e.addEventListener('input', () => {
                if (e.value > 100) {
                    e.value = 100;
                }
                if (e.value < 0) {
                    e.value = 0;
                }
                autoFiller(i, e)
            })
        })

        let PlayerFlag = document.querySelector(".countrypicker")
        let selectedOption = PlayerFlag.options[0];
        let countryCode = selectedOption.value.toLowerCase();
        flagToPreview.src = `https://flagcdn.com/w320/${countryCode}.png`;
        flagToPreview.alt = `Flag of ${selectedOption.text}`;
        PlayerFlag.addEventListener("change", () => {
            selectedOption = PlayerFlag.options[PlayerFlag.selectedIndex];
            countryCode = selectedOption.value.toLowerCase();
            flagToPreview.src = `https://flagcdn.com/w320/${countryCode}.png`;
            flagToPreview.alt = `Flag of ${selectedOption.text}`;
        })
    }
    CardPreview()

    formToSend.addEventListener("submit", (e) => {
        e.preventDefault()
        let counter = 0
        inputsToValid.forEach((e, i) => {
            if (NotNull(e) === true) {
                counter++
            }
            if (i === inputsToValid.length - 1) {
                if (counter === 0) {
                    console.log("ready to fetch");
                    let MyForm = new FormData(formToSend)
                    for (item of MyForm) {
                        let name = item[0];
                        let value = item[1];
                        CardToFetch[name] = value;
                    }
                    console.log(CardToFetch);
                    fetchNewCard(CardToFetch)
                    CardToFetch = {}
                }
            }
        })
    })
});

function autoFiller(i, e) {
    for (let index = 0; index < 6; index++) {
        if (i === index) {
            statisticsToPreview[i].querySelectorAll("span")[0].innerHTML = e.placeholder
            statisticsToPreview[i].className = e.placeholder
            statisticsToPreview[i].querySelectorAll("span")[1].innerHTML = e.value
        }
    }
}

function NotNull(input) {
    if (input.value === '') {
        console.log("null");
        return true
    }
}

async function fetchNewCard(form) {
    const response = await fetch("http://localhost:3000/players", {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(form)
    });

    if (!response.ok) {
        console.log(`HTTP error! Status: ${response.status}`);
    }
    formToSend.reset();
}