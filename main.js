  // Filter buttons
  const filterButtons = document.querySelectorAll(".filter");
  const extensionCards = document.querySelectorAll(".extension-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      extensionCards.forEach(card => {
        const isChecked = card.querySelector('input[type="checkbox"]').checked;
        if (filter === "all") {
          card.style.display = "flex";
        } else if (filter === "active" && isChecked) {
          card.style.display = "flex";
        } else if (filter === "inactive" && !isChecked) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Remove button
  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".extension-card");
      card.remove();
    });
  });

  // Toggle switch updates filter view dynamically
  const switches = document.querySelectorAll('.switch input');
  switches.forEach(sw => {
    sw.addEventListener('change', () => {
      const activeFilter = document.querySelector('.filter.active').dataset.filter;
      // Trigger filter logic again
      filterButtons.forEach(btn => {
        if (btn.dataset.filter === activeFilter) {
          btn.click();
        }
      });
    });
  });
