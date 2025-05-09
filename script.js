document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navUl = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
    navUl.classList.toggle("active");
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        navUl.classList.remove("active");

        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Skill Slider
  const skillTrack = document.querySelector(".skill-track");
  const skillCards = document.querySelectorAll(".skill-card");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentPosition = 0;
  const cardWidth = skillCards[0].offsetWidth + 30; // card width + gap

  function updateSliderPosition() {
    skillTrack.style.transform = `translateX(${
      -currentPosition * cardWidth
    }px)`;
  }
  // for the button at the bottom of the page
  nextBtn.addEventListener("click", function () {
    if (currentPosition < skillCards.length - 3) {
      currentPosition++;
      updateSliderPosition();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentPosition > 0) {
      currentPosition--;
      updateSliderPosition();
    }
  });

  // Auto-advance slider (optional)
  let autoSlideInterval = setInterval(() => {
    if (currentPosition < skillCards.length - 3) {
      currentPosition++;
    } else {
      currentPosition = 0;
    }
    updateSliderPosition();
  }, 5000);

  // Pause auto-slide on hover
  const skillsContainer = document.querySelector(".skills-container");
  skillsContainer.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
  });

  skillsContainer.addEventListener("mouseleave", () => {
    autoSlideInterval = setInterval(() => {
      if (currentPosition < skillCards.length - 3) {
        currentPosition++;
      } else {
        currentPosition = 0;
      }
      updateSliderPosition();
    }, 5000);
  });

  // Projects Slider
  const projectsTrack = document.querySelector(".projects-track");
  const projectCards = document.querySelectorAll(".project-card");
  const prevProjectBtn = document.querySelector(".prev-project-btn");
  const nextProjectBtn = document.querySelector(".next-project-btn");
  let currentProjectPosition = 0;
  const projectCardWidth = projectCards[0].offsetWidth + 30; // card width + gap

  function updateProjectSliderPosition() {
    projectsTrack.style.transform = `translateX(${
      -currentProjectPosition * projectCardWidth
    }px)`;
  }

  nextProjectBtn.addEventListener("click", function () {
    if (currentProjectPosition < projectCards.length - 3) {
      currentProjectPosition++;
      updateProjectSliderPosition();
    }
  });

  prevProjectBtn.addEventListener("click", function () {
    if (currentProjectPosition > 0) {
      currentProjectPosition--;
      updateProjectSliderPosition();
    }
  });

  // Auto-advance projects slider (optional)
  let autoProjectSlideInterval = setInterval(() => {
    if (currentProjectPosition < projectCards.length - 3) {
      currentProjectPosition++;
    } else {
      currentProjectPosition = 0;
    }
    updateProjectSliderPosition();
  }, 5000);

  // Pause auto-slide on hover for projects
  const projectsContainer = document.querySelector(".projects-container");
  projectsContainer.addEventListener("mouseenter", () => {
    clearInterval(autoProjectSlideInterval);
  });

  projectsContainer.addEventListener("mouseleave", () => {
    autoProjectSlideInterval = setInterval(() => {
      if (currentProjectPosition < projectCards.length - 3) {
        currentProjectPosition++;
      } else {
        currentProjectPosition = 0;
      }
      updateProjectSliderPosition();
    }, 5000);
  });

  // Certificates Modal
  const certificateTrigger = document.getElementById("certificate-trigger");
  const certificatesModal = document.getElementById("certificates-modal");
  const closeModalButtons = document.querySelectorAll(".close-modal");

  certificateTrigger.addEventListener("click", function () {
    certificatesModal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  // Contact Modal
  const contactBtn = document.getElementById("contact-btn");
  const contactModal = document.getElementById("contact-modal");

  contactBtn.addEventListener("click", function () {
    contactModal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  // Close Modals
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      certificatesModal.style.display = "none";
      contactModal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  });

  // Close modal when clicking outside
  window.addEventListener("click", function (e) {
    if (e.target === certificatesModal) {
      certificatesModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
    if (e.target === contactModal) {
      contactModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Form Submission
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Here you would typically send the form data to a server
      alert("Thank you for your message! I will get back to you soon.");
      contactModal.style.display = "none";
      document.body.style.overflow = "auto";
      contactForm.reset();
    });
  }

  // Animate elements when they come into view
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".skill-card, .project-card, .about-content"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animated elements
  document
    .querySelectorAll(".skill-card, .project-card, .about-content")
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on page load

  // New: Animate gradient backgrounds on education cards
  const educationCards = document.querySelectorAll(".education-card");
  educationCards.forEach((card) => {
    card.classList.add("animated-gradient");
  });
});
// Track social link clicks
document.querySelectorAll(".social-links a").forEach((link) => {
  link.addEventListener("click", function () {
    // Send analytics data here
    console.log(`Clicked: ${this.href}`);
  });
});
