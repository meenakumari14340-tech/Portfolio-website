const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        menuBtn.textContent =
            navLinks.classList.contains("show")
                ? "✕"
                : "☰";

    });


    /* Close menu after clicking a link */

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuBtn.textContent = "☰";

        });

    });

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navigationLinks =
    document.querySelectorAll(".nav-links a");


function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (target === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveLink
);

updateActiveLink();


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(9, 9, 14, 0.96)";

        navbar.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background =
            "rgba(9, 9, 14, 0.82)";

        navbar.style.boxShadow =
            "none";

    }

});


/* =====================================================
   CERTIFICATE MODAL
===================================================== */

const certificateModal =
    document.getElementById("certificateModal");

const certificateImage =
    document.getElementById("certificateImage");


/* Open Certificate */

function openCertificate(imagePath) {

    if (!certificateModal || !certificateImage) {
        return;
    }

    certificateImage.src = imagePath;

    certificateModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* Close Certificate */

function closeCertificate() {

    if (!certificateModal) {
        return;
    }

    certificateModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* =====================================================
   CLOSE CERTIFICATE BY OUTSIDE CLICK
===================================================== */

if (certificateModal) {

    certificateModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                certificateModal
            ) {

                closeCertificate();

            }

        }
    );

}


/* =====================================================
   CLOSE CERTIFICATE WITH ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeCertificate();

        }

    }
);


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".content-section, .stat-card, .project-card, .skill-card, .certificate-card, .achievement-card, .experience-card"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.08
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
