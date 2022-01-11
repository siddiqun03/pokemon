let elCardList = document.querySelector(".cards-list");

function heroCards(array) {
  for (let cards of array) {
    let cardItem = document.createElement("li");
    let cardTop = document.createElement("div");
    let cardImg = document.createElement("img");
    let infoBox = document.createElement("div");
    let heroHeading = document.createElement("h5");
    let heroDesc = document.createElement("p");
    let heroWeight = document.createElement("p");
    let heroHeight = document.createElement("span");
    let divider = document.createElement("span");
    //===========================================//
    //appendchild:
    elCardList.appendChild(cardItem);
    cardTop.appendChild(cardImg);
    cardItem.appendChild(cardTop);
    cardItem.appendChild(divider);
    cardItem.appendChild(infoBox);
    infoBox.appendChild(heroHeading);
    infoBox.appendChild(heroDesc);
    infoBox.appendChild(heroWeight);
    //===========================================//
    //class:
    cardItem.setAttribute("class", " card-item");
    cardImg.setAttribute("class", "card-img");
    cardTop.setAttribute("class", "card-top");
    cardImg.setAttribute("src", `${cards.img}`);
    cardImg.setAttribute("width", 157);
    cardImg.setAttribute("height", 157);
    cardImg.setAttribute("alt", `img of ${cards.name}`);
    divider.setAttribute("class", "divider");
    infoBox.setAttribute("class", "card-sources");
    heroHeading.setAttribute("class", "heading-card");
    heroDesc.setAttribute("class", "desc-card");
    heroWeight.setAttribute("class", "kg");
    heroHeight.setAttribute("class", "age");
    //============================================//
    //equation:
    heroHeading.textContent = `${cards.name}`;
    heroDesc.textContent = cards.candy;
    heroWeight.innerHTML =
      cards.weight + '<span class="age">' + cards.height + "</span>";
  }
}

heroCards(pokemons);
