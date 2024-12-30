const btn = document.getElementById("search");

const ACCESS_TOKEN = `0z6XXVL3B45MMhj8KknNhgKenyWsCgfFRLvGrPi7GxY`;

async function getImage(val) {
  const res = await fetch(`https://api.unsplash.com/search/photos?query=${val}&client_id=${ACCESS_TOKEN}`);
  const result = await res.json();
  return result.results;
}

function renderCards(images) {
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";

  images.forEach((image) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const truncateDescription = (text, wordLimit) => {
      if (!text) return "No description available";
      const words = text.split(" ");
      return words.length > wordLimit
        ? words.slice(0, wordLimit).join(" ") + "..."
        : text;
    };

    const description = truncateDescription(
      image.description || image.alt_description || "No description available",
      3
    );
    card.innerHTML =
      `<div class="profile">
        <img class="img_profile" src="${image.user.profile_image.medium}" alt="profile_pic">
        <p>${image.user.name}</p>
      </div>
      <div>
        <img class="content_pic" src="${image.urls.thumb}" alt="${image.alt_description}">
        <p>${description}</p>
      </div>`
      ;

    cardsContainer.appendChild(card);
  });
}

btn.addEventListener("click", async () => {
  const value = document.getElementById("value").value.trim();
  if (value) {
    const res = await getImage(value);
    renderCards(res);
  } else {
    alert("Please enter a search term!");
  }
});