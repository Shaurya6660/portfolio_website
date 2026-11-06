
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

document.getElementById("year").textContent =
    new Date().getFullYear();

const modal = document.getElementById("runModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const requirementsList = document.getElementById("requirementsList");
const stepsList = document.getElementById("stepsList");
const modalNote = document.getElementById("modalNote");
const modalRepoLink = document.getElementById("modalRepoLink");

const projectGuides = {
    ios: {
        title: "Run the iOS Application",
        description:
            "This is a native iOS project. You need a Mac computer and Apple's Xcode development environment to build and run it.",
        requirements: [
            "A Mac with macOS",
            "Xcode installed from the Mac App Store",
            "The project's Swift source code",
            "An iOS Simulator or a compatible iPhone"
        ],
        steps: [
            "Open the project's GitHub repository.",
            "Download the source code or clone the repository.",
            "Open the .xcodeproj or .xcworkspace file in Xcode.",
            "Select an iOS Simulator device.",
            "Press the Run button in Xcode to build and launch the app."
        ],
        note:
            "Note: iOS apps require Apple's development tools. Running on a physical iPhone may require signing and developer setup.",
        repo:
            "https://github.com/YOUR_USERNAME/YOUR_IOS_REPO"
    },

    realestate: {
        title: "Run the Real Estate Website",
        description:
            "This is a frontend website built with HTML, CSS and JavaScript. You can run it locally in a web browser.",
        requirements: [
            "A computer with a modern web browser",
            "The project's HTML, CSS and JavaScript files",
            "Optional: Visual Studio Code and Live Server extension"
        ],
        steps: [
            "Open the project's GitHub repository.",
            "Download the repository as a ZIP file or clone it.",
            "Extract the project files.",
            "Open the project folder in Visual Studio Code.",
            "Open index.html using Live Server, or open the HTML file directly in your browser."
        ],
        note:
            "Note: Features that use external services, such as Google Maps, may require valid API configuration. Add your own API key where required.",
        repo:
            "https://github.com/YOUR_USERNAME/YOUR_REAL_ESTATE_REPO"
    }
};

function openRunModal(projectKey) {
    const project = projectGuides[projectKey];

    if (!project) return;

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalNote.textContent = project.note;
    modalRepoLink.href = project.repo;

    requirementsList.replaceChildren();
    stepsList.replaceChildren();

    project.requirements.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        requirementsList.appendChild(li);
    });

    project.steps.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        stepsList.appendChild(li);
    });

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalClose.focus();
}

function closeRunModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.querySelectorAll(".run-button").forEach(button => {
    button.addEventListener("click", () => {
        openRunModal(button.dataset.project);
    });
});

modalClose.addEventListener("click", closeRunModal);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeRunModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("show")) {
        closeRunModal();
    }
});
