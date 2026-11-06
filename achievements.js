const certificates = [    
];
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}
document.getElementById("year").textContent =
    new Date().getFullYear();
const certificateGrid = document.getElementById("certificateGrid");
const emptyState = document.getElementById("emptyState");
const filterButtons = document.querySelectorAll(".filter-btn");
let currentFilter = "all";
const certificateCount = document.getElementById("certificateCount");
const workshopCount = document.getElementById("workshopCount");
const competitionCount = document.getElementById("competitionCount");
const otherCount = document.getElementById("otherCount");
const galleryCount = document.getElementById("galleryCount");
const modal = document.getElementById("certificateModal");
const viewerClose = document.getElementById("viewerClose");
const viewerTitle = document.getElementById("viewerTitle");
const viewerIssuer = document.getElementById("viewerIssuer");
const viewerDate = document.getElementById("viewerDate");
const viewerImage = document.getElementById("viewerImage");
const openOriginal = document.getElementById("openOriginal");
function updateStatistics() {
    certificateCount.textContent = certificates.length;
    workshopCount.textContent = certificates.filter(
        item => item.category === "workshop"
    ).length;
    competitionCount.textContent = certificates.filter(
        item => item.category === "competition"
    ).length;
    otherCount.textContent = certificates.filter(
        item => item.category === "other"
    ).length;
    galleryCount.textContent =
        `${certificates.length} ADDED`;
}
function renderCertificates() {
    certificateGrid.replaceChildren();
    const filteredCertificates = certificates.filter(item => {
        return currentFilter === "all" ||
            item.category === currentFilter;
    });
    emptyState.style.display =
        filteredCertificates.length === 0 ? "block" : "none";
    filteredCertificates.forEach(item => {
        const card = document.createElement("article");
        card.className = "certificate-card";
        const imageContainer = document.createElement("div");
        imageContainer.className = "certificate-image";
        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.title;
        image.loading = "lazy";
        image.onerror = () => {
            image.remove();
            const placeholder = document.createElement("span");
            placeholder.className = "certificate-placeholder";
            placeholder.textContent = "✧";
            imageContainer.appendChild(placeholder);
        };
        imageContainer.appendChild(image);
        const info = document.createElement("div");
        info.className = "certificate-info";
        const title = document.createElement("h3");
        title.textContent = item.title;
        const issuer = document.createElement("p");
        issuer.textContent = `Issued by: ${item.issuer}`;
        const date = document.createElement("p");
        date.textContent = item.date;
        const category = document.createElement("span");
        category.className = "certificate-category";
        category.textContent = item.category.toUpperCase();
        const viewButton = document.createElement("button");
        viewButton.className = "view-certificate";
        viewButton.textContent = "View Certificate ↗";
        viewButton.addEventListener("click", () => {
            openCertificate(item);
        });
        info.append(title, issuer, date, category, viewButton);
        card.append(imageContainer, info);
        certificateGrid.appendChild(card);
    });
}
function openCertificate(item) {
    viewerTitle.textContent = item.title;
    viewerIssuer.textContent = `Issued by: ${item.issuer}`;
    viewerDate.textContent = item.date;
    viewerImage.src = item.image;
    viewerImage.alt = item.title;
    openOriginal.href = item.image;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    viewerClose.focus();
}
function closeCertificate() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item =>
            item.classList.remove("active")
        );
        button.classList.add("active");
        currentFilter = button.dataset.filter;
        renderCertificates();
     });
});
viewerClose.addEventListener("click", closeCertificate);
modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeCertificate();
    }
});
document.addEventListener("keydown", event => {
    if (
        event.key === "Escape" &&
        modal.classList.contains("show")
    ) {
        closeCertificate();
    }
});
updateStatistics();
renderCertificates();
