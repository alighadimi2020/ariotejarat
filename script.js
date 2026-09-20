document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".system-card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(18px)";

        setTimeout(() => {
            card.style.transition =
                "opacity 0.7s ease, transform 0.7s cubic-bezier(.2,.8,.2,1), box-shadow 0.45s ease, border-color 0.45s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 160 + index * 120);
    });
});