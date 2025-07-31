//script for navigate to target section on page

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

//script for on-scroll navigation active page
const sections = document.querySelectorAll("div[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 90;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

// script for hamburger menu for mobile screen width
document.getElementById("hamburger").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("show");
});

document.getElementById("nav-menu").addEventListener("click", function () {
  this.classList.remove("show");
});

// script for partners carousel
$(document).ready(function () {
  $(".your-slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//email.js
function sendEmail(event) {
  event.preventDefault();

  let contact = document.getElementById("contact").value.trim();
  let firstName = document.getElementById("fname").value.trim();
  let lastName = document.getElementById("lname").value.trim();
  let company = document.getElementById("company").value.trim();
  let position = document.getElementById("position").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("messagebox").value.trim();

  if (
    contact === "" ||
    firstName === "" ||
    lastName === "" ||
    company === "" ||
    position === "" ||
    phone === "" ||
    mobile === "" ||
    email === "" ||
    message === ""
  ) {
    Swal.fire({
      title: "Error!",
      text: "All fields are required. Please fill them out before submitting.",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  const namePattern = /^[A-Za-z\s]{2,30}$/;
  if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
    Swal.fire(
      "Invalid Name",
      "First and last names must contain only letters and be 2–30 characters long.",
      "error"
    );
    return;
  }

  if (company.length > 50 || position.length > 50) {
    Swal.fire(
      "Too Long",
      "Company or position exceeds max allowed length.",
      "error"
    );
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    Swal.fire("Invalid Email", "Please enter a valid email address.", "error");
    return;
  }

  const phonePattern = /^(None|none|\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})$/;
  const mobilePattern = /^(None|none|09\d{9})$/;

  if (!phonePattern.test(phone)) {
    Swal.fire(
      "Invalid Phone",
      "Enter a valid phone number or 'None'.",
      "error"
    );
    return;
  }

  if (!mobilePattern.test(mobile)) {
    Swal.fire(
      "Invalid Mobile",
      "Enter a valid mobile number or 'None'.",
      "error"
    );
    return;
  }

  let params = {
    contact,
    firstName,
    lastName,
    company,
    position,
    phone,
    mobile,
    email,
    message,
  };

  let serviceID, templateID, publicKey;

  if (contact === "Sales") {
    serviceID = "service_my3kdza";
    templateID = "template_tesr9m4";
    publicKey = "ZHIMJdoveoAKc06gf";
  } else if (contact === "Tech") {
    serviceID = "service_my3kdza";
    templateID = "template_tesr9m4";
    publicKey = "ZHIMJdoveoAKc06gf";
  } else {
    Swal.fire({
      title: "Error!",
      text: "Please select a valid department.",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  emailjs.init({ publicKey });

  emailjs.send(serviceID, templateID, params).then(
    function (response) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      console.log("Success:", response);
      document.getElementById("contact-form").reset();
    },
    function (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.log("Error:", error);
    }
  );
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const productsHeader = document.querySelectorAll(".products-header");
const productsImg = document.querySelectorAll(".product-img");
const solutionHeader = document.querySelectorAll(".solutions-header");
const solutionGrid = document.querySelectorAll(".solutions-grid");
const otherGrid = document.querySelectorAll(".others-solution");
const servicesHeader2 = document.querySelectorAll(".left-grid h2");
const servicesHeader4 = document.querySelectorAll(".left-grid h4");
const leftImage = document.querySelectorAll(".left-image");
const rightTop = document.querySelectorAll(".right-top");
const rightBottom = document.querySelectorAll(".right-bottom");
const leftBtn = document.querySelectorAll(".left-btn");
const leftParagraph = document.querySelectorAll(".left-grid p");
const partnersHeader = document.querySelectorAll(".partners-header");
const sliderContainer = document.querySelectorAll(".slider-container");
const inquireForm = document.querySelectorAll(".inquire form");
const iFrame = document.querySelectorAll(".maps-container iframe");

productsHeader.forEach((header) => observer.observe(header));
productsImg.forEach((productimage) => observer.observe(productimage));
solutionHeader.forEach((header) => observer.observe(header));
solutionGrid.forEach((solutiongrid) => observer.observe(solutiongrid));
otherGrid.forEach((othergrid) => observer.observe(othergrid));
servicesHeader4.forEach((h4header) => observer.observe(h4header));
servicesHeader2.forEach((h2header) => observer.observe(h2header));
leftImage.forEach((leftimage) => observer.observe(leftimage));
rightBottom.forEach((rightbottom) => observer.observe(rightbottom));
rightTop.forEach((righttop) => observer.observe(righttop));
leftBtn.forEach((servicesbtn) => observer.observe(servicesbtn));
leftParagraph.forEach((leftinfo) => observer.observe(leftinfo));
partnersHeader.forEach((partnersheader) => observer.observe(partnersheader));
sliderContainer.forEach((slider) => observer.observe(slider));
inquireForm.forEach((form) => observer.observe(form));
iFrame.forEach((frame) => observer.observe(frame));
