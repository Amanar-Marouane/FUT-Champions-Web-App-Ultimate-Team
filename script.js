let button = document.querySelectorAll(".button")
let info = document.querySelector(".info")
let flagToModify = false;
let id;
let flagToPush;
let altToPush;

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
let ST_Position = `<div class="CPostion">
                        <p>ST</p>
                    </div>
                    <div class="add">
                        <svg width="40px" height="40px" viewBox="0 0 32 32" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">

                            <title>plus-square</title>
                            <desc>Created with Sketch Beta.</desc>
                            <defs>

                            </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                                sketch:type="MSPage">
                                <g id="Icon-Set" sketch:type="MSLayerGroup"
                                    transform="translate(-100.000000, -1035.000000)" fill="#000000">
                                    <path
                                        d="M130,1063 C130,1064.1 129.104,1065 128,1065 L104,1065 C102.896,1065 102,1064.1 102,1063 L102,1039 C102,1037.9 102.896,1037 104,1037 L128,1037 C129.104,1037 130,1037.9 130,1039 L130,1063 L130,1063 Z M128,1035 L104,1035 C101.791,1035 100,1036.79 100,1039 L100,1063 C100,1065.21 101.791,1067 104,1067 L128,1067 C130.209,1067 132,1065.21 132,1063 L132,1039 C132,1036.79 130.209,1035 128,1035 L128,1035 Z M122,1050 L117,1050 L117,1045 C117,1044.45 116.552,1044 116,1044 C115.448,1044 115,1044.45 115,1045 L115,1050 L110,1050 C109.448,1050 109,1050.45 109,1051 C109,1051.55 109.448,1052 110,1052 L115,1052 L115,1057 C115,1057.55 115.448,1058 116,1058 C116.552,1058 117,1057.55 117,1057 L117,1052 L122,1052 C122.552,1052 123,1051.55 123,1051 C123,1050.45 122.552,1050 122,1050 L122,1050 Z"
                                        id="plus-square" sketch:type="MSShapeGroup">

                                    </path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <img class="backgroung" src="./media/emptyBadge.png" alt="">`
F_T_T.style.display = "none"

function Move() {
    currFormation.addEventListener("change", () => {
        if (currFormation.value === '4-3-3') {
            F_T_T.style.display = "flex"
            F_T_T.querySelector(".att").innerHTML = ''
            let ST = document.createElement("div")
            ST.className = "card stadiumCard shadow ST"
            ST.innerHTML = ST_Position;
            let RW = document.createElement("div")
            RW.className = "card stadiumCard shadow ST"
            RW.innerHTML = ST_Position;
            let LW = document.createElement("div")
            LW.className = "card stadiumCard shadow ST"
            LW.innerHTML = ST_Position;
            LW.querySelector(".CPostion p").innerHTML = "LW"
            RW.querySelector(".CPostion p").innerHTML = "LW"
            F_T_T.querySelector(".att").appendChild(LW)
            F_T_T.querySelector(".att").appendChild(ST)
            F_T_T.querySelector(".att").appendChild(RW)

            F_T_T.querySelector(".mid").innerHTML = ''
            let LM = document.createElement("div")
            LM.className = "card stadiumCard shadow LM"
            LM.innerHTML = ST_Position;
            let CM = document.createElement("div")
            CM.className = "card stadiumCard shadow CM"
            CM.innerHTML = ST_Position;
            let RM = document.createElement("div")
            RM.className = "card stadiumCard shadow RM"
            RM.innerHTML = ST_Position;
            LM.querySelector(".CPostion p").innerHTML = "LM"
            CM.querySelector(".CPostion p").innerHTML = "CM"
            RM.querySelector(".CPostion p").innerHTML = "RM"
            F_T_T.querySelector(".mid").appendChild(LM)
            F_T_T.querySelector(".mid").appendChild(CM)
            F_T_T.querySelector(".mid").appendChild(RM)

            let att = document.querySelector(".att").querySelectorAll(".card")
            let mid = document.querySelector(".mid").querySelectorAll(".card")
            let def = document.querySelector(".def").querySelectorAll(".card")
            att[1].style.transform = "translateY(30px)"
            mid[1].style.transform = "translateY(30px)"
            def[2].style.transform = "translateY(30px)"
            def[1].style.transform = "translateY(30px)"
        } else if (currFormation.value === '4-4-2') {
            F_T_T.style.display = "flex"
            F_T_T.querySelector(".att").innerHTML = ''
            let ST = document.createElement("div")
            ST.className = "card stadiumCard shadow ST"
            ST.innerHTML = ST_Position;
            let ST2 = document.createElement("div")
            ST2.className = "card stadiumCard shadow ST"
            ST2.innerHTML = ST_Position;
            F_T_T.querySelector(".att").appendChild(ST2)
            F_T_T.querySelector(".att").appendChild(ST)

            F_T_T.querySelector(".mid").innerHTML = ''
            let LM = document.createElement("div")
            LM.className = "card stadiumCard shadow LM"
            LM.innerHTML = ST_Position;
            let CM = document.createElement("div")
            CM.className = "card stadiumCard shadow CM"
            CM.innerHTML = ST_Position;
            let CM2 = document.createElement("div")
            CM2.className = "card stadiumCard shadow CM"
            CM2.innerHTML = ST_Position;
            let RM = document.createElement("div")
            RM.className = "card stadiumCard shadow RM"
            RM.innerHTML = ST_Position;
            LM.querySelector(".CPostion p").innerHTML = "LM"
            CM.querySelector(".CPostion p").innerHTML = "CM"
            CM2.querySelector(".CPostion p").innerHTML = "CM"
            RM.querySelector(".CPostion p").innerHTML = "RM"
            F_T_T.querySelector(".mid").appendChild(LM)
            F_T_T.querySelector(".mid").appendChild(CM2)
            F_T_T.querySelector(".mid").appendChild(CM)
            F_T_T.querySelector(".mid").appendChild(RM)

            let mid = document.querySelector(".mid").querySelectorAll(".card")
            let def = document.querySelector(".def").querySelectorAll(".card")
            mid[1].style.transform = "translateY(30px)"
            mid[2].style.transform = "translateY(30px)"
            def[1].style.transform = "translateY(30px)"
            def[2].style.transform = "translateY(30px)"
        } else {
            F_T_T.style.display = "none"
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
                            <img class="backgroung" id="modify" src="./media/pen.svg" alt="">
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
            let Def = e.Def;
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

    currFormation.addEventListener("change", () => {
        global()
    })

    modTime.addEventListener("click", () => {
        console.log("click")
        playersContainer.style.display = 'grid'
        menu.style.display = 'none'
        GetBackToMenu.style.display = 'block'
        addNewPlayer.style.display = "none"
        Preview.style.display = 'none'
        flag = true;
        global()
    })

    GetBackToMenu.addEventListener("click", () => {
        console.log("click")
        playersContainer.style.display = 'none'
        menu.style.display = 'flex'
        GetBackToMenu.style.display = 'none'
        addNewPlayer.style.display = "none"
        Preview.style.display = 'none'
        F_T_T.style.display = 'none'
        currFormation.value = "-- Choose a formation --";
        flag = false;
    })

    addPlayer.addEventListener("click", () => {
        console.log("click")
        addNewPlayer.style.display = "flex"
        menu.style.display = 'none'
        GetBackToMenu.style.display = 'block'
        Preview.style.display = 'flex'
        F_T_T.style.display = 'none'
        currFormation.value = "-- Choose a formation --";
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
                console.log("click")
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
        }
        if (position === "mid") {
            cardSwitch(AvMidCards, OccMidCards, e);
        }
        if (position === "def") {
            cardSwitch(AvDefCards, OccDefCards, e);
        }
        if (position === "kep") {
            cardSwitch(AvKepCards, OccKepCards, e);
        }
    }

    function cardSwitch(Avarr, Occarr, e) {
        let index = Avarr.findIndex(card => card.innerHTML === e.innerHTML);
        Occarr.push(Avarr[index])
        Avarr.splice(index, 1)
        update(Avarr, Occarr, e)
    }

    function update(Avarr, Occarr, e) {
        let tempArr = Array.from(e.parentElement.querySelectorAll(".occupied"));

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
        let toHide2 = F_T_T.querySelectorAll("#modify")
        if (toHide) {
            toHide.forEach(e => {
                e.style.display = "none"
            })
        }
        if (toHide) {
            toHide2.forEach(e => {
                e.style.display = "none"
            })
        }
    }

    function removeClickHandling() {
        let btn = document.querySelectorAll("#delete")
        btn.forEach((e, i) => {
            e.addEventListener("click", () => {
                console.log("click")
                let parentDiv = e.parentElement.parentElement.className;
                if (parentDiv === "playersDisplay") {
                    let id = playersData[i].id
                    Delete(id)
                }
            })
        })
    }
    removeClickHandling()

    function modifyClickHandling() {
        let btn = document.querySelectorAll("#modify")
        btn.forEach((e, i) => {
            e.addEventListener("click", () => {
                console.log("click")
                let parentDiv = e.parentElement.parentElement.className;
                if (parentDiv === "playersDisplay") {
                    id = playersData[i].id
                }
                let cardToModify = e.parentElement;
                modifyFiller(cardToModify)
                playersContainer.style.display = 'none'
                addNewPlayer.style.display = "flex"
                menu.style.display = 'none'
                GetBackToMenu.style.display = 'block'
                Preview.style.display = 'flex'
                F_T_T.style.display = 'none'
                flagToModify = true;
            })
        })
    }
    modifyClickHandling()

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

async function modify(id, CardToFetch) {
    const response = await fetch(`http://localhost:3000/players/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(CardToFetch)
    });

    if (!response.ok) {
        console.log(`HTTP error! Status: ${response.status}`);
    }
    if (response.ok) {
        console.log(`Item with ID ${id} has been modified.`);
    } else {
        console.error(`Failed to delete item with ID ${id}.`);
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


function CardPreview() {
    nameToPreview.innerHTML = PlayerName.value
    PlayerName.addEventListener("input", () => {
        nameToPreview.innerHTML = PlayerName.value
    })

    ratingToPreview.innerHTML = PlayerRating.value
    PlayerRating.addEventListener("input", () => {
        if (PlayerRating.value > 100) {
            PlayerRating.value = 100;
        }
        if (PlayerRating.value < 0) {
            PlayerRating.value = 0;
        }
        ratingToPreview.innerHTML = PlayerRating.value
    })

    if (PlayerPhoto.value) {
        photoToPreview.src = PlayerPhoto.value
    }
    PlayerPhoto.addEventListener("input", () => {
        photoToPreview.src = PlayerPhoto.value
    })

    if (PlayerClubImg.value) {
        clubToPreview.src = PlayerClubImg.value
    }
    PlayerClubImg.addEventListener("input", () => {
        clubToPreview.src = PlayerClubImg.value
    })

    if (PlayerCardImg.value) {
        CardImgToPreview.src = PlayerCardImg.value
    }
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
            st[5].placeholder = "Def"
            st[0].name = "pac"
            st[1].name = "pas"
            st[3].name = "dri"
            st[3].name = "phy"
            st[4].name = "sho"
            st[5].name = "Def"
        }
    })

    st.forEach((e, i) => {
        autoFiller(i, e)
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

    document.addEventListener("DOMContentLoaded", function () {
        let PlayerFlag = document.querySelector(".countrypicker");
        let selectedOption = PlayerFlag.options[0];
        let countryCode = selectedOption.value.toLowerCase();

        flagToPreview.src = `https://flagcdn.com/w320/${countryCode}.png`;
        flagToPreview.alt = selectedOption.text.toUpperCase();

        flagToPush = `https://flagcdn.com/w320/${countryCode}.png`;
        altToPush = selectedOption.text;

        PlayerFlag.addEventListener("change", () => {
            selectedOption = PlayerFlag.options[PlayerFlag.selectedIndex];
            countryCode = selectedOption.value.toLowerCase();

            flagToPreview.src = `https://flagcdn.com/w320/${countryCode}.png`;
            flagToPreview.alt = selectedOption.text;

            flagToPush = `https://flagcdn.com/w320/${countryCode}.png`;
            altToPush = selectedOption.text;
        });
    });
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
                let MyForm = new FormData(formToSend)
                for (item of MyForm) {
                    let name = item[0];
                    let value = item[1];
                    CardToFetch[name] = value;
                }
                CardToFetch.flag = flagToPush;
                CardToFetch.nationality = altToPush;
                console.log("src is " + flagToPush);

                console.log(CardToFetch.flag);
                if (!flagToModify) {
                    fetchNewCard(CardToFetch)
                } else {
                    modify(id, CardToFetch)
                }
                CardToFetch = {}
                formToSend.reset()
            }
        }
    })
})


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

async function modifyFiller(cardToModify) {
    PlayerName.value = cardToModify.querySelector(".name").innerHTML
    PlayerRating.value = cardToModify.querySelector(".rating").innerHTML
    PlayerPhoto.value = cardToModify.querySelector(".photo").querySelector("img").src
    PlayerClubImg.value = cardToModify.querySelector(".club").querySelector("img").src
    PlayerCardImg.value = cardToModify.querySelector("img").src
    PlayerPosition.value = cardToModify.querySelector(".position").innerHTML
    let st = cardToModify.querySelector(".statistics").querySelectorAll("div")
    let t = PlayerStatics.querySelectorAll("input")
    for (let index = 0; index < 6; index++) {
        t[index].value = st[index].querySelectorAll("span")[1].innerHTML
    }

    let PlayerFlag = document.querySelector(".countrypicker select")
    let country = cardToModify.querySelector(".flag img").alt.toLowerCase();


    Array.from(PlayerFlag.options).forEach((e, i) => {
        let countryName = e.innerHTML.toLowerCase()
        let countryCode = e.value.toLowerCase()

        if (countryName === country) {
            flagToPreview.src = `https://flagcdn.com/w320/${countryCode}.png`;
            cardToModify.querySelector(".flag img").alt = e.innerHTML;
            flagToPreview.alt = e.innerHTML;
            PlayerFlag.value = e.value;
        }
    })
    CardPreview()
}