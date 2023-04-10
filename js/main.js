    const nav = document.querySelector("#nav")
    const navBtn = document.querySelector("#nav-btn");
    const navBtnimg = document.querySelector("#nav-btn-img");

        navBtn.onclick = () => {
            if (nav.classList.toggle ('open')) {
                navBtnimg.src = "./img/Icon/nav-close.svg";
            } else {
                navBtnimg.src = "./img/Icon/nav-open.svg";
            }
        }

    AOS.init({
        once: true
    });
   