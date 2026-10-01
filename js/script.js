/* =========================================================
   Typing Animation
   ========================================================= */

var typed = new Typed(".typing", {

    strings: [
        "Web Desiger",
        "Web Developer",
        "Graphic Desiger",
        "Freelancer"
    ],

    typeSpeed: 100,

    // Correct option name
    backSpeed: 60,

    loop: true
});


/* =========================================================
   Aside / Navigation
   ========================================================= */

const nav = document.querySelector(".nav");

const navList = nav.querySelectorAll("li");

const totalNavList = navList.length;

const allSection =
    document.querySelectorAll(".section");

const totalSection = allSection.length;


/* =========================================================
   Navigation Links
   ========================================================= */

for (let i = 0; i < totalNavList; i++) {

    const a =
        navList[i].querySelector("a");


    a.addEventListener(
        "click",
        function () {

            removeBackSection();


            for (let j = 0; j < totalNavList; j++) {

                const currentLink =
                    navList[j].querySelector("a");


                if (
                    currentLink.classList.contains("active")
                ) {

                    addBackSection(j);

                }


                currentLink.classList.remove("active");

            }


            this.classList.add("active");


            showSection(this);


            if (window.innerWidth < 1200) {

                asideSectionTogglerBtn();

            }

        }
    );

}


/* =========================================================
   Remove Back Section
   ========================================================= */

function removeBackSection() {

    for (let i = 0; i < totalSection; i++) {

        allSection[i]
            .classList
            .remove("back-section");

    }

}


/* =========================================================
   Add Back Section
   ========================================================= */

function addBackSection(num) {

    if (allSection[num]) {

        allSection[num]
            .classList
            .add("back-section");

    }

}


/* =========================================================
   Show Selected Section
   ========================================================= */

function showSection(element) {

    for (let i = 0; i < totalSection; i++) {

        allSection[i]
            .classList
            .remove("active");

    }


    const href =
        element.getAttribute("href");


    if (!href) {
        return;
    }


    const target =
        href.split("#")[1];


    const targetSection =
        document.querySelector("#" + target);


    if (targetSection) {

        targetSection
            .classList
            .add("active");

    }

}


/* =========================================================
   Update Navigation
   ========================================================= */

function updateNav(element) {

    const href =
        element.getAttribute("href");


    if (!href) {
        return;
    }


    const target =
        href.split("#")[1];


    for (let i = 0; i < totalNavList; i++) {

        const link =
            navList[i].querySelector("a");


        link.classList.remove("active");


        const linkHref =
            link.getAttribute("href");


        if (!linkHref) {
            continue;
        }


        const linkTarget =
            linkHref.split("#")[1];


        if (target === linkTarget) {

            link.classList.add("active");

        }

    }

}


/* =========================================================
   Contact Me / Hire Me Button
   ========================================================= */

const hireMe =
    document.querySelector(".hire-me");


if (hireMe) {

    hireMe.addEventListener(
        "click",
        function () {

            const sectionIndex =
                this.getAttribute(
                    "data-section-index"
                );


            showSection(this);


            updateNav(this);


            removeBackSection();


            if (sectionIndex !== null) {

                addBackSection(
                    Number(sectionIndex)
                );

            }

        }
    );

}


/* =========================================================
   Mobile Navigation
   ========================================================= */

const navTogglerBtn =
    document.querySelector(".nav-toggler");

const aside =
    document.querySelector(".aside");


if (navTogglerBtn && aside) {

    navTogglerBtn.addEventListener(
        "click",
        () => {

            asideSectionTogglerBtn();

        }
    );


    function asideSectionTogglerBtn() {

        aside.classList.toggle("open");

        navTogglerBtn.classList.toggle("open");


        for (let i = 0; i < totalSection; i++) {

            allSection[i]
                .classList
                .toggle("open");

        }

    }

}


/* =========================================================
   Contact Form
   =========================================================

   IMPORTANT:

   The contact form is now handled directly by Web3Forms.

   There is intentionally NO emailjs.send()
   and NO sendMail() function here.

   The HTML form sends directly to:

   https://api.web3forms.com/submit

   This keeps the email sending simple.
   ========================================================= */