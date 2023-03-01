import { destination, customers } from "./data.js";
const destinationWrapper = document.querySelector(".list-wrapper");
const customersWrapper = document.querySelector(".customers-list-wrapper");

let content = "";
for (let item of destination) {
  content += `
    <div class="destination"  data-aos="fade-up" data-aos-delay=${item.delay} data-aos-offset="0"  data-aos-duration="1000">
        <div class="image-wrapper">
            <img src=${item.image} alt="singapore" />
        </div>

        <h2 class="title title-medium">${item.title}</h2>

        <p class="paragraph paragraph-small">${item.paragraph}</p>

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
            <span class="price paragraph paragraph-small">₹ ${item.price}</span>
        </div>
        
        <div class="destination-row">
            <span class="add-info">${item.distance}</span>
            <span class="add-info">${item.travel_time}</span>
        </div>
  </div>
    `;

  destinationWrapper.innerHTML = content;
}

let customersContent = "";
for (let item of customers) {
  customersContent += `
    <div class="customer">
      <p class="paragraph paragraph-small">${item.review}</p>

      <div class="author">
        <div class="author-image">
          <img src=${item.author_image} alt="author" />
        </div>
        <div class="author-info">
          <h3 class="author-name paragraph paragraph-small">${item.name}</h3>
          <span class="author-position">${item.author_position}</span>
        </div>
      </div>
  </div>
    `;

  customersWrapper.innerHTML = customersContent;
}

const active = () => {
  const body = document.querySelector("body");
  const burger = document.querySelector(".burger");

  if (burger) {
    burger.addEventListener("click", () => {
      body.classList.toggle("menu-open");
    });
  }
};

active();

AOS.init();
