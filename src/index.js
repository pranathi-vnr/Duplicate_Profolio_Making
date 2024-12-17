document.addEventListener("DOMContentLoaded", function () {
  // Function to update progress
  function updateProgress(selector, endValue, color) {
    let startValue = 0;
    const speed = 30;
    const progressElement = document.querySelector(selector);
    const valueElement = document.querySelector(`${selector}-progress`);

    if (!progressElement || !valueElement) {
      console.error(`Elements not found for selector: ${selector}`);
      return;
    }

    const interval = setInterval(() => {
      startValue++;
      valueElement.textContent = `${startValue}%`;
      progressElement.style.background = `conic-gradient(${color} ${
        startValue * 3.6
      }deg, #ededed 0deg)`;

      if (startValue >= endValue) {
        clearInterval(interval);
      }
    }, speed);
  }

  // Update progress bars with sample percentages and colors
  updateProgress(".html-css", 90, "#fca61f"); // HTML & CSS
  updateProgress(".javascript", 75, "#7d2ae8"); // JavaScript
  updateProgress(".php", 80, "#20c997"); // PHP
  updateProgress(".reactjs", 30, "#3f396d"); // ReactJS

  // Sticky navbar
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar-top");
    if (window.scrollY > 50) {
      navbar.classList.add("fixed-top");
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = `${navbarHeight}px`;
    } else {
      navbar.classList.remove("fixed-top");
      document.body.style.paddingTop = "0";
    }
  });

  // Back to top button
  const backToTopButton = document.getElementById("btn-back-to-top");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Filter functionality
  document.querySelectorAll(".filter-item").forEach(function (item) {
    item.addEventListener("click", function () {
      const value = this.getAttribute("data-filter");
      if (value === "all") {
        document.querySelectorAll(".post").forEach(function (post) {
          post.style.display = "block";
        });
      } else {
        document.querySelectorAll(".post").forEach(function (post) {
          if (post.classList.contains(value)) {
            post.style.display = "block";
          } else {
            post.style.display = "none";
          }
        });
      }
    });
  });
});
