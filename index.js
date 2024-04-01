const body = document.querySelector('body')

//theme switch
const toggleSwitch = document.querySelector("#theme-switch")
toggleSwitch.checked = window.localStorage.getItem("isDark") === "true" ? true : false

function toggleTheme() {
  window.localStorage.setItem("isDark", toggleSwitch.checked)

  if (toggleSwitch.checked) {
    body.classList.add("dark")
  } else {
    body.classList.remove("dark")
  }
}

toggleTheme()

toggleSwitch.addEventListener("change", toggleTheme)

// menu button header
const menuBtn = document.querySelector(".menu-button")
const mobileNav = document.querySelector('.navigation')
const menuLinks = document.querySelectorAll(".navigation-link")

menuBtn.style.display = "none"

let isMenuOpen = false

function menuHandler() {
  isMenuOpen = !isMenuOpen
  if (isMenuOpen) {
    menuBtn.classList.add("open")
    mobileNav.classList.add("open")
    body.style.overflowY = "hidden"
  }
  else {
    menuBtn.classList.remove("open")
    mobileNav.classList.remove("open")
    body.style.overflowY = "auto"
  }
}

function addNavClickEvent() {
  menuLinks.forEach((link) => {
    link.addEventListener("click", menuHandler)
  })
}

function removeNavClickEvent() {
  menuLinks.forEach((link) => {
    link.removeEventListener("click", menuHandler)
  })
}

// hero image
const heroSection = document.querySelector(".hero")
const heroImg = document.createElement("img")

heroImg.src = "./assets/photo.png"
heroImg.alt = "Angelika Valerio"

function handleWindowScroll() {
  if (window.scrollY > 1100) {
    body.appendChild(nav)
  } else {
    body.getElementsByClassName("back-btn-wrapper").length && body.removeChild(nav)
  }
}

function handleWindowResize() {
  var w = window.innerWidth;
  if (w > 1000) {
    menuBtn.style.display = "none"
    menuBtn.removeEventListener("click", menuHandler)
    removeNavClickEvent()
    heroSection.appendChild(heroImg)
  } else {
    menuBtn.style.display = "block"
    menuBtn.addEventListener("click", menuHandler)
    addNavClickEvent()
  }
}

addNavClickEvent()
handleWindowResize()

window.addEventListener("resize", handleWindowResize)
document.addEventListener("scroll", handleWindowScroll)



// home button jump link
const nav = document.createElement("nav")
nav.classList.add("back-btn-wrapper")
const navLink = document.createElement("a")
navLink.href = "#"
navLink.innerText = "Go to top"
nav.appendChild(navLink)

// projects section

const projectDetails = [
  {
    name: "Portfolio Website",
    tools: ['HTML', 'CSS', 'JavaScript'],
    img: "./assets/portfolio.webp",
    desc: "This is my first portfolio website made with Vanilla JS and 💖.",
    live: "#"
  },
  {
    name: "CRAPPO Website",
    tools: ['Vue', 'SASS'],
    img: "./assets//crappo.webp",
    desc: "This is my solution for the CRAPPO website frontend development challenge from Coding360 using Nuxt 3.",
    live: "https://crappo-app-nuxt.vercel.app/"
  },
  {
    name: "Admin Portal",
    tools: ['React', 'CSS', "MaterialUI"],
    img: "./assets//admin-portal.webp",
    desc: "An admin portal client-side application with dark mode support.",
    live: "https://admin-portal-react-lake.vercel.app/"
  },
]

function createProject() {
  const projects = document.querySelector(".grid")

  projectDetails.map((project, index) => {
    projects.innerHTML += `
    <div class="project project-${index + 1}">
    <a href="${project.live}" target="_blank" rel="noreferrer">
      <img src="${project.img}" alt="${project.img}" />
      </a>
      <div class="project-desc">
      <h4>${project.name}</h4>

      <ul>
      ${project.tools.map((tool) => {
      return `<li>${tool}</li>`
    }).join("")
      }
      </ul >
      </div>
    </div >
    `
  })
}

createProject()

//experience section

const experienceDetails = [
  {
    role: "Frontend Developer",
    company: "e-pon Digital Inc.",
    description: "As a frontend developer, my responsibilities involve developing features for the back-office web application using Vue 3 and ElementUI. I also worked on developing screens for the h5 application using Vue 2 and VantUI."
  },
  {
    role: "Web Developer",
    company: "8box Solutions Inc.",
    description: "I built quality website solutions for businesses. Some projects I worked on include learning management systems, e-commerce platforms, business websites, directory websites, and landing pages.",
    span: "2022"
  },
  {
    role: "Developer Intern",
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    description: "As an intern, I worked on developing a web application for user and task management. I used Vue.js and Quasar Framework in the frontend and PHP and MySQL for the backend.",
    span: "2021"
  }
]

function createExperienceContent() {
  const experienceBlock = document.querySelector(".experience-block")

  experienceDetails.map((exp) => {
    experienceBlock.innerHTML += `
    <div class="experience-row">
    ${exp.span ? `<span>${exp.span}</span>` : ""}
        <div class="experience-content">
          <h4>${exp.role}</h4>
          <h5>${exp.company}</h5>
          <p>${exp.description}</p>
        </div>
      </div>
    `
  })
}

createExperienceContent()
