// ============================================
// PORTFOLIO — SHARED SCRIPT
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu (profile-style app card)
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("mobile-menu");

  if (toggle && menu) {
    const closeMenu = () => {
      menu.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };
    const openMenu = () => {
      menu.classList.add("open");
      toggle.classList.add("active");
      toggle.setAttribute("aria-expanded", "true");
      menu.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    toggle.addEventListener("click", () => {
      menu.classList.contains("open") ? closeMenu() : openMenu();
    });

    menu.querySelectorAll("[data-close]").forEach((el) => {
      el.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Close automatically if the viewport is resized up to desktop width
    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  // Contact form — sends via Web3Forms (https://web3forms.com), no backend needed.
  // Set your access key as the "access_key" hidden input's value in contact.html.
  const form = document.getElementById("contact-form");
  if (form) {
    const status = document.getElementById("form-status");
    const submitBtn = form.querySelector("button[type='submit']");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const accessKey = form.querySelector("input[name='access_key']").value;
      if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
        status.textContent =
          "Form isn't connected yet — add your Web3Forms access key in contact.html (see README.md).";
        status.style.color = "#B3261E";
        status.style.display = "block";
        return;
      }

      const originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
      status.style.display = "none";

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });
        const result = await response.json();

        if (response.status === 200 && result.success) {
          status.textContent = "Thanks — your message is on its way. I'll reply soon.";
          status.style.color = "#4B5D42";
          form.reset();
        } else {
          status.textContent =
            "Something went wrong sending that. Please try again or email me directly.";
          status.style.color = "#B3261E";
        }
      } catch (err) {
        status.textContent =
          "Couldn't reach the server. Check your connection and try again.";
        status.style.color = "#B3261E";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
        status.style.display = "block";
      }
    });
  }
});
