"use strict"
// DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", function () {

    const memoryGame = document.getElementById("memoryGame");

    let clickedCardsArray = [];
    let clickedCard = [];




    // CARDS -----------------------------------------------------------------
    const cards = [


        { cardName: "html", image: './images/html.png' },
        { cardName: "html", image: './images/html2.png' },
        { cardName: "css", image: './images/css.png' },
        { cardName: "css", image: './images/css2.png' },
        { cardName: "js", image: './images/js.png' },
        { cardName: "js", image: './images/js2.png' },


    ];

    cards.sort(() => 0.5 - Math.random())





    //    CREATE CARD ITERATION AND SHUFFLE --------------------------------------
    for (let i = 0; i < cards.length; i++) {




        const card = document.createElement("img");
        card.setAttribute("src", "./images/front.png");
        card.setAttribute("id", i);
        memoryGame.appendChild(card);

        card.addEventListener("click", function () {


            const cardId = card.getAttribute("id")
            card.setAttribute("src", cards[cardId].image);
            clickedCardsArray.push(cards[cardId].cardName);
            clickedCard.push(cardId)
            if (clickedCardsArray.length === 2) {


                setTimeout(() => {


                    clickedCards();


                }, 500)




                function clickedCards() {

                    console.log(clickedCard, "clickedCard")
                    const kartice = document.querySelectorAll("img")
                    const opcija1 = clickedCard[0];
                    const opcija2 = clickedCard[1];

                    if (clickedCardsArray[0] === clickedCardsArray[1]) {


                        window.alert("That is correct");
                        clickedCardsArray = [];
                        clickedCard = [];


                    }

                    else {


                        window.alert("That is NOT correct!");
                        clickedCardsArray = [];
                        clickedCard = [];
                        kartice[opcija1].setAttribute("src", "./images/front.png")
                        kartice[opcija2].setAttribute("src", "./images/front.png")

                    }



                }


            }


        })

    }



})