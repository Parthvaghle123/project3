document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 0,
      image: "https://www.starbucks.in/assets/icon/Bestseller.webp",
      title: "Bestseller",
    },
    {
      id: 1,
      image: "https://www.starbucks.in/assets/icon/Drinks.webp",
      title: "Drinks",
    },
    {
      id: 2,
      image: "https://www.starbucks.in/assets/icon/Food.webp",
      title: "Food",
    },
    {
      id: 3,
      image: "https://www.starbucks.in/assets/icon/Merchandise.webp",
      title: "Merchandise",
    },
    {
      id: 4,
      image: "https://www.starbucks.in/assets/icon/CoffeeAtHome.webp",
      title: "Coffee At Home",
    },
    {
      id: 5,
      image: "https://www.starbucks.in/assets/icon/ReadyToEat.webp",
      title: "Ready to Eat",
    },
  ];
  const displayItems = (items) => {
    let rootElement = document.getElementById("root");
    rootElement.innerHTML = "";
    items.forEach((item) => {
      let div = document.createElement("div");
      div.classList.add("products");
      div.innerHTML = `
    <div class='img-box'>
      <img class='images' src="${item.image}" alt="${item.title}">
      </div>
    <h2 class="text-center">${item.title}</h2>
        `;
      rootElement.appendChild(div);
    });
  };
  displayItems(products);
});
