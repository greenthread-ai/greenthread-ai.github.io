// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Add scroll effect to navigation
let lastScroll = 0;
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    nav.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    nav.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe feature cards and pricing cards
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".feature-card, .pricing-card, .step",
  );

  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Waitlist form handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("waitlist-form");
  const emailInput = document.getElementById("email");
  const submitBtn = form.querySelector(".submit-btn");
  const statusEl = document.getElementById("status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    // Reset status
    statusEl.textContent = "";
    statusEl.className = "form-status";

    // Add loading state
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;
    emailInput.disabled = true;

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        // Success
        statusEl.textContent =
          data.message || "Thanks for joining! We'll be in touch soon.";
        statusEl.classList.add("success");
        emailInput.value = "";
      } else {
        // Error from server
        statusEl.textContent =
          data.message || "Something went wrong. Please try again.";
        statusEl.classList.add("error");
      }
    } catch (error) {
      // Network or other error
      console.error("Waitlist submission error:", error);
      statusEl.textContent =
        "Unable to submit. Please check your connection and try again.";
      statusEl.classList.add("error");
    } finally {
      // Remove loading state
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
      emailInput.disabled = false;
      emailInput.focus();
    }
  });
});
