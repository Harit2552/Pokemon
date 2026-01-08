const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll("#main-container");

    cards.forEach(card => {
        const nameTag = card.querySelector("h3");
        const name = nameTag?.textContent.toLowerCase();
        
        if (name.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
