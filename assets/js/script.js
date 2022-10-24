

function createCard(cardContent, cardDesk) {
    const divCard = document.createElement('div')
    divCard.innerHTML = `<div class="front">
                        <div class="front__inside">
                          <h3 class="textCard">${cardContent.title}</h3>
                          <p class="textCard">${cardContent.task}</p>
                        </div>
                      </div>
                      <div class="back">  
                      </div>`
    cardDesk.appendChild(divCard)
    divCard.className = "card"
    divCard.addEventListener('click', () => {
      const card = document.querySelector('.card-desk .card')
      if (card.className.includes('flip')) {
        card.style.animation = "drop_card 0.5s"
        setTimeout(displayRandomCard, 500)
      } else {
        card.classList.add('flip')
      }
    })
}
  
function displayRandomCard() {
    const cardDesk = document.querySelector('.card-desk')
    cardDesk.innerHTML = ''
    const randomIndex = getRandomNum(0, cards.length - 1)
    const selectedCard = cards[randomIndex]
    createCard(selectedCard, cardDesk)
}
  
 function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
const btnImage = document.getElementById('getRandomCard')
  
btnImage.addEventListener('click', displayRandomCard)
  