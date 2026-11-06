
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("show");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}
document.getElementById("year").textContent =
    new Date().getFullYear();
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const recipientEmail = "chaudharyneeti@gmail.com";

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
        return;
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        formStatus.textContent = "Please complete all fields.";
        return;
    }

    const emailSubject = encodeURIComponent(subject);

    const emailBody = encodeURIComponent(
        `Hello Shaurya,

${message}

Regards,
${name}
${email}`
    );

    const mailtoLink =
        `mailto:${recipientEmail}?subject=${emailSubject}&body=${emailBody}`;

    formStatus.textContent =
        "Opening your email application. Please review and send your message there.";

    window.location.href = mailtoLink;
});
