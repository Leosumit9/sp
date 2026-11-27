
/* =========================================
   SUMIT SHARMA PORTFOLIO
   Main JavaScript
========================================= */


/* =========================================
   1. TYPING ANIMATION
========================================= */

const typingText = document.getElementById("typingText");

const titles = [
    "Software Developer",
    "Python Developer",
    "Android Developer",
    "AI Automation Learner",
    "Application Developer"
];

let titleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeAnimation() {
    if (!typingText) return;

    const currentTitle = titles[titleIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentTitle.substring(
        0,
        characterIndex
    );

    let speed = deleting ? 45 : 90;

    if (!deleting && characterIndex === currentTitle.length) {
        deleting = true;
        speed = 1400;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        speed = 400;
    }

    setTimeout(typeAnimation, speed);
}

typeAnimation();


/* =========================================
   2. SKILLS DATA
========================================= */

const skills = [
    { name: "Python", icon: "Py" },
    { name: "Java", icon: "Ja" },
    { name: "Kotlin", icon: "Kt" },
    { name: "JavaScript", icon: "JS" },
    { name: "HTML5", icon: "HT" },
    { name: "CSS3", icon: "CS" },
    { name: "SQL", icon: "DB" },
    { name: "Firebase", icon: "FB" },
    { name: "Git & GitHub", icon: "GH" },
    { name: "REST APIs", icon: "API" },
    { name: "Gemini API", icon: "AI" },
    { name: "Android Development", icon: "AD" },
    { name: "MongoDB", icon: "MG" },
    { name: "AI Automation", icon: "AU" }
];

const skillsContainer = document.getElementById("skillsContainer");

if (skillsContainer) {
    skills.forEach((skill) => {
        const card = document.createElement("article");
        card.className = "skill-card";

        const icon = document.createElement("div");
        icon.className = "skill-icon";
        icon.textContent = skill.icon;

        const heading = document.createElement("h3");
        heading.textContent = skill.name;

        card.append(icon, heading);
        skillsContainer.appendChild(card);
    });
}


/* =========================================
   3. PROJECTS DATA
========================================= */

const projects = [
    {
        number: "01",
        category: "Android Application",
        title: "eVidya",
        description:
            "An educational Android application designed to provide learning resources, books, quizzes and PDF study materials.",
        technologies: [
            "Kotlin",
            "Android Studio",
            "Firebase"
        ],
        link: "https://github.com/"
    },
    {
        number: "02",
        category: "AI Application",
        title: "AI Chatbot",
        description:
            "An AI chatbot project exploring conversational AI, API integration and database-based chat history.",
        technologies: [
            "Python",
            "Gemini API",
            "MongoDB"
        ],
        link: "https://github.com/"
    },
    {
        number: "03",
        category: "Application Development",
        title: "Book Reader App",
        description:
            "A book-reading application concept for displaying books and accessing digital reading resources.",
        technologies: [
            "Android",
            "Kotlin",
            "SQLite"
        ],
        link: "https://github.com/"
    },
    {
        number: "04",
        category: "Web Development",
        title: "Personal Portfolio",
        description:
            "A personal portfolio website to present projects, technical skills, education and professional information.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        link: "https://github.com/"
    }
];

const projectsContainer = document.getElementById("projectsContainer");

if (projectsContainer) {
    projects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card";

        const top = document.createElement("div");
        top.className = "project-top";

        const number = document.createElement("span");
        number.className = "project-number";
        number.textContent = project.number;

        const category = document.createElement("span");
        category.className = "project-category";
        category.textContent = project.category;

        top.append(number, category);

        const heading = document.createElement("h3");
        heading.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const technologyList = document.createElement("div");
        technologyList.className = "project-tech";

        project.technologies.forEach((technology) => {
            const tag = document.createElement("span");
            tag.textContent = technology;
            technologyList.appendChild(tag);
        });

        const link = document.createElement("a");
        link.className = "project-link";
        link.href = project.link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "View Project ↗";
        link.setAttribute("aria-label", `View ${project.title} project`);

        card.append(
            top,
            heading,
            description,
            technologyList,
            link
        );

        projectsContainer.appendChild(card);
    });
}


/* =========================================
   4. ACHIEVEMENTS DATA
========================================= */

const achievements = [
    {
        icon: "🏆",
        title: "BCA – First Class Distinction",
        description:
            "Successfully completed Bachelor of Computer Applications with First Class Distinction."
    },
    {
        icon: "🎓",
        title: "Master of Computer Applications",
        description:
            "Currently pursuing MCA and continuing to develop technical knowledge."
    },
    {
        icon: "💻",
        title: "Application Development",
        description:
            "Worked on application development projects involving Android, databases and programming."
    },
    {
        icon: "🤖",
        title: "AI & Automation Learning",
        description:
            "Exploring artificial intelligence, APIs and automation technologies."
    }
];

const achievementsContainer =
    document.getElementById("achievementsContainer");

if (achievementsContainer) {
    achievements.forEach((achievement) => {
        const card = document.createElement("article");
        card.className = "achievement-card";

        const icon = document.createElement("div");
        icon.className = "achievement-icon";
        icon.textContent = achievement.icon;

        const content = document.createElement("div");

        const heading = document.createElement("h3");
        heading.textContent = achievement.title;

        const description = document.createElement("p");
        description.textContent = achievement.description;

        content.append(heading, description);
        card.append(icon, content);

        achievementsContainer.appendChild(card);
    });
}


/* =========================================
   5. MOBILE NAVIGATION MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close menu after clicking a navigation link.
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
            menuToggle.textContent = "☰";
        });
    });
}


/* =========================================
   6. SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".section:not(.hero) .section-heading, " +
    ".about-grid, " +
    ".timeline-item, " +
    ".skill-card, " +
    ".project-card, " +
    ".achievement-card, " +
    ".resume-content, " +
    ".contact-section > *"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}


/* =========================================
   7. AUTOMATIC FOOTER YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   8. WEBSITE LOADED
========================================= */

console.log("Sumit Sharma Portfolio loaded successfully.");
