'use strict';

const elementToggleFunc = function (elem) {
  if (elem) elem.classList.toggle("active");
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  if (modalContainer) modalContainer.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
};

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    if (!modalImg || !modalTitle || !modalText) return;

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();
  });
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();

    if (selectValue) {
      selectValue.innerText = this.innerText;
    }

    if (select) elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

if (filterBtn.length > 0) {
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();

      if (selectValue) {
        selectValue.innerText = this.innerText;
      }

      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
}

const eventTrack = document.querySelector(".events-track");

if (eventTrack && !eventTrack.dataset.duplicated) {
  const eventCards = Array.from(eventTrack.children);

  eventCards.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    eventTrack.appendChild(clone);
  });

  eventTrack.dataset.duplicated = "true";
}

const videoModal = document.querySelector(".video-modal");
const videoModalVideo = document.querySelector(".video-modal__video");
const videoModalCloseButtons = document.querySelectorAll("[data-video-close]");

const syncFullscreenVideoModal = function () {
  if (!videoModal || !videoModalVideo) return;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  videoModal.style.position = "fixed";
  videoModal.style.inset = "0";
  videoModal.style.left = "0";
  videoModal.style.top = "0";
  videoModal.style.right = "0";
  videoModal.style.bottom = "0";
  videoModal.style.width = viewportWidth + "px";
  videoModal.style.height = viewportHeight + "px";
  videoModal.style.maxWidth = "none";
  videoModal.style.maxHeight = "none";

  videoModalVideo.style.width = viewportWidth + "px";
  videoModalVideo.style.height = viewportHeight + "px";
  videoModalVideo.style.maxWidth = "none";
  videoModalVideo.style.maxHeight = "none";
};

const closeVideoModal = function () {
  if (!videoModal) return;

  videoModal.classList.remove("active");
  videoModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("video-modal-open");

  if (videoModalVideo) {
    videoModalVideo.pause();
    videoModalVideo.currentTime = 0;
  }
};

const openVideoModal = function () {
  if (!videoModal || !videoModalVideo) return;

  syncFullscreenVideoModal();
  document.body.classList.add("video-modal-open");

  videoModal.classList.add("active");
  videoModal.setAttribute("aria-hidden", "false");

  videoModalVideo.pause();
  videoModalVideo.currentTime = 0;
  videoModalVideo.muted = false;
  videoModalVideo.volume = 1;
  videoModalVideo.playbackRate = 1.35;

  const playPromise = videoModalVideo.play();

  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      // Ignore autoplay restrictions and keep the modal accessible.
    });
  }
};

window.addEventListener("resize", syncFullscreenVideoModal);

videoModalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeVideoModal);
});

if (videoModalVideo) {
  videoModalVideo.addEventListener("ended", closeVideoModal);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && videoModal && videoModal.classList.contains("active")) {
    closeVideoModal();
  }
});

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (!form || !formBtn) return;

    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const selectedPage = this.textContent.trim().toLowerCase();

    navigationLinks.forEach((link) => {
      link.classList.toggle("active", link === this);
    });

    pages.forEach((page) => {
      page.classList.toggle("active", page.dataset.page === selectedPage);
    });

    openVideoModal();
    window.scrollTo(0, 0);
  });
}