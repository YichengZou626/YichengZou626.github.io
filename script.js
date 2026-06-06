const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

document.querySelectorAll(".photo-card img").forEach((image) => {
  const markMissing = () => {
    image.classList.add("is-missing");
  };

  image.addEventListener("error", () => {
    markMissing();
  });

  if (image.complete && image.naturalWidth === 0) {
    markMissing();
  }
});
