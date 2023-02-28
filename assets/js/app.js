import { destination } from "./data.js";
const destinationWrapper = document.querySelector(".list-wrapper");

let content = "";
for (let item of destination) {
  content += `
    <div class="destination">
        <div class="image-wrapper">
            <img src=${item.image} alt="singapore" />
        </div>

        <h2 class="title title-medium">${item.title}</h2>

        <p class="parapraph parapraph-small">${item.paragraph}</p>

        <div class="destination-row">
            <div class="vectors">
                <div class="vector">
                <img src="./assets/media/svg1.svg" alt="svg" />
                </div>
                <div class="vector">
                <img src="./assets/media/eat.svg" alt="eat" />
                </div>
                <div class="vector">
                <img src="./assets/media/fly.svg" alt="fly" />
                </div>
            </div>
            <span class="price parapraph parapraph-small">₹ ${item.price}</span>
        </div>
        
        <div class="destination-row">
            <span class="add-info">${item.distance}</span>
            <span class="add-info">${item.travel_time}</span>
        </div>
  </div>
    `;

  destinationWrapper.innerHTML = content;
}
