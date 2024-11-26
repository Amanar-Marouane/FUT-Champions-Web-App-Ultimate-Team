let signUp_button = document.querySelector(".header-nav-signUp").querySelector("button")

function clickEffect() {
    signUp_button.style.transform = 'scale(0.8)';
    signUp_button.style.transition = 'all .2s ease-in-out';
    setTimeout(() => {
        signUp_button.style.transform = '';
    }, 200);
}

let currFormation = '4-3-3'
let cardToMove = document.querySelectorAll(".card")
let att = document.querySelector(".att").querySelectorAll(".card")
let mid = document.querySelector(".mid").querySelectorAll(".card")
let def = document.querySelector(".def").querySelectorAll(".card")
function Move() {
    if (currFormation === '4-3-3') {
        mid[1].style.transform = "translateY(20px)"
        def[2].style.transform = "translateY(20px)"
        def[1].style.transform = "translateY(20px)"
    }
}
Move()

let cardTemlate = `<div class="card GK">
                            <img class="backgroung" src="./media/emptyBadge.png" alt="">
                            <div class="info">
                                <h3 class="rating">94</h3>
                                <h3 class="position">CM</h3>
                            </div>
                            <div class="photo">
                                <img src="https://cdn.sofifa.net/players/230/621/25_120.png" alt="">
                            </div>
                            <div class="name">Zidane</div>
                            <div class="statistics">
                                <div class="PAC"><span>PAC</span><br><span>99</span></div>
                                <div class="SHO"><span>SHO</span><br><span>99</span></div>
                                <div class="PAS"><span>PAS</span><br><span>99</span></div>
                                <div class="DRI"><span>DRI</span><br><span>99</span></div>
                                <div class="DEF"><span>DEF</span><br><span>99</span></div>
                                <div class="PHY"><span>PHY</span><br><span>99</span></div>
                            </div>
                            <div class="info1">
                                <div class="flag">
                                    <img src="https://cdn.sofifa.net/flags/it.png" alt="">
                                </div>
                                <div class="club">
                                    <img src="https://cdn.sofifa.net/meta/team/591/120.png" alt="">
                                </div>
                            </div>
                            <div class="CPostion">
                                <p>GK</p>
                            </div>
                        </div>`

// let playersData;

// async function global() {
//     // await fetch0();
//     await fetch1();
// }

// async function fetch0() {
//     const response = await fetch("./players.json", {
//         method: 'GET',
//         headers: {
//             "Content-Type": 'application/json'
//         },
//     });

//     if (!response.ok) {
//         console.log(`HTTP error! Status: ${response.status}`);
//     }

//     playersData = await response.json();
//     console.log("Fetched playersData:", playersData);

// }

// async function fetch1() {
//     playersData = {};
//     const response = await fetch("./players.json", {
//         method: 'POST',
//         headers: {
//             "Content-Type": 'application/json'
//         },
//         body: JSON.stringify(playersData)
//     });

//     if (!response.ok) {
//         console.log(`HTTP error!`);
//     }
// }

// global();
