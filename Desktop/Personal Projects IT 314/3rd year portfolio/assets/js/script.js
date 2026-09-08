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

const filterFunc = function (selectedValue) {
  const filterItems = document.querySelectorAll("[data-filter-item]");

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

const photographGallery = document.querySelector("[data-photograph-gallery]");
const photographDates = {
  "IMG_0140.jpg": "2026-06-01",
  "IMG_0141.jpg": "2026-06-01",
  "IMG_0142.jpg": "2026-06-01",
  "IMG_0143.jpg": "2026-06-01",
  "IMG_0397-2.jpg": "2026-06-16",
  "IMG_0398.jpg": "2026-06-16",
  "IMG_0475.jpg": "2026-06-16",
  "IMG_0479.jpg": "2026-06-16",
  "IMG_0648.jpg": "2026-06-16",
  "IMG_3943.JPG": "2026-02-17",
  "IMG_5359-Enhanced-NR.JPG": "2026-02-17",
  "IMG_6779.JPG": "2026-02-17",
  "IMG_6803-2.JPG": "2026-02-17",
  "IMG_6810-2.JPG": "2026-02-17",
  "IMG_7945.JPG": "2026-03-30",
  "IMG_7969.JPG": "2026-03-30",
  "IMG_7997.JPG": "2026-03-30",
  "IMG_8005.JPG": "2026-03-30",
  "IMG_9105.jpg": "2026-05-22",
  "IMG_9122.jpg": "2026-05-22",
  "IMG_9137.jpg": "2026-05-22",
  "IMG_9143.jpg": "2026-05-22",
  "IMG_9407.jpg": "2026-05-26",
  "IMG_9429.jpg": "2026-05-26",
  "IMG_9458.jpg": "2026-05-26",
  "Jhon Lester T. Adalia_Mukha ng Sining_CICS.JPG": "2026-03-02",
  "The Mind Behind the Grid_Jhon Lester T. Adalia_CICS_SILENT CHAMPIONS.JPG": "2026-02-28",
  "untitled-11.JPG": "2026-04-04",
  "untitled-15.JPG": "2026-04-04",
  "untitled-16.JPG": "2026-04-04",
  "untitled-17.JPG": "2026-04-04",
  "untitled-24.JPG": "2026-04-04",
  "untitled-34.JPG": "2026-04-04",
  "untitled-44.JPG": "2026-04-04",
  "untitled-45.JPG": "2026-04-04",
  "untitled-55.JPG": "2026-04-04",
  "untitled-73.JPG": "2026-04-04",
  "untitled-74.JPG": "2026-04-04",
  "untitled-77.JPG": "2026-04-04",
  "untitled-79.JPG": "2026-04-04",
  "untitled-80.JPG": "2026-04-04"
};
const photographImages = [
  "IMG_6803-2.JPG",
  "IMG_6779.JPG",
  "IMG_5359-Enhanced-NR.JPG",
  "IMG_3943.JPG",
  "IMG_0648.jpg",
  "IMG_0479.jpg",
  "IMG_0475.jpg",
  "IMG_0398.jpg",
  "IMG_0397-2.jpg",
  "IMG_0143.jpg",
  "IMG_0142.jpg",
  "IMG_0141.jpg",
  "IMG_0140.jpg",
  "IMG_9407.jpg",
  "IMG_9143.jpg",
  "IMG_9137.jpg",
  "IMG_9122.jpg",
  "IMG_9105.jpg",
  "IMG_8005.JPG",
  "IMG_7997.JPG",
  "IMG_7969.JPG",
  "IMG_7945.JPG",
  "IMG_6810-2.JPG",
  "untitled-15.JPG",
  "untitled-11.JPG",
  "The Mind Behind the Grid_Jhon Lester T. Adalia_CICS_SILENT CHAMPIONS.JPG",
  "Jhon Lester T. Adalia_Mukha ng Sining_CICS.JPG",
  "IMG_9458.jpg",
  "IMG_9429.jpg",
  "untitled-24.JPG",
  "untitled-17.JPG",
  "untitled-16.JPG",
  "untitled-44.JPG",
  "untitled-34.JPG",
  "untitled-45.JPG",
  "untitled-55.JPG",
  "untitled-80.JPG",
  "untitled-79.JPG",
  "untitled-77.JPG",
  "untitled-74.JPG",
  "untitled-73.JPG"
];

if (photographGallery) {
  photographGallery.replaceChildren();

  photographImages.forEach((fileName, index) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    const figure = document.createElement("figure");
    const icon = document.createElement("div");
    const iconElement = document.createElement("ion-icon");
    const image = document.createElement("img");
    const title = document.createElement("h3");
    const category = document.createElement("p");

    item.className = "project-item active";
    item.dataset.filterItem = "";
    item.dataset.category = "photographs";
    item.dataset.fileName = fileName;
    item.dataset.date = photographDates[fileName] || "";
    link.href = `./assets/images/Photographs/${encodeURIComponent(fileName).replace(/%20/g, " ")}`;
    figure.className = "project-img";
    icon.className = "project-item-icon-box";
    iconElement.setAttribute("name", "eye-outline");
    image.src = link.href;
    image.alt = `Photograph ${index + 1}`;
    image.loading = "lazy";
    title.className = "project-title";
    title.textContent = fileName;
    category.className = "project-category";
    category.textContent = "Photographs";

    icon.appendChild(iconElement);
    figure.append(icon, image);
    link.append(figure, title, category);
    item.appendChild(link);
    photographGallery.appendChild(item);
  });
}

const driftWalls = document.querySelectorAll("[data-drift-wall]");

driftWalls.forEach((wall) => {
  const sourceItems = Array.from(wall.querySelectorAll(".project-item:not([data-drift-clone])"));
  const columnCount = window.matchMedia("(max-width: 767px)").matches ? 2 : 4;
  const plane = document.createElement("div");

  plane.className = "drift-wall__plane";

  const columns = Array.from({ length: columnCount }, () => {
    const column = document.createElement("div");
    const track = document.createElement("div");

    column.className = "drift-wall__col";
    track.className = "drift-wall__track";
    column.appendChild(track);
    plane.appendChild(column);

    return track;
  });

  sourceItems.forEach((item, index) => {
    const track = columns[index % columnCount];
    if (wall.hasAttribute("data-no-duplicate")) {
      track.appendChild(item);
      return;
    }

    const clone = item.cloneNode(true);

    clone.setAttribute("aria-hidden", "true");
    clone.dataset.driftClone = "true";
    clone.querySelectorAll("a").forEach((link) => link.setAttribute("tabindex", "-1"));
    track.appendChild(item);
    track.appendChild(clone);
  });

  wall.replaceChildren(plane);

  wall.addEventListener("pointermove", (event) => {
    const bounds = wall.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8;

    plane.style.transform = `translate(-50%, -50%) scale(1.08) rotateX(${14 + y}deg) rotateY(${-12 + x}deg) translateZ(-100px)`;
  });

  wall.addEventListener("pointerleave", () => {
    plane.style.transform = "translate(-50%, -50%) scale(1.08) rotateX(14deg) rotateY(-12deg) translateZ(-100px)";
  });
});

const projectModal = document.querySelector("[data-project-modal]");
const projectModalImage = document.querySelector("[data-project-image]");
const projectModalCategory = document.querySelector("[data-project-category]");
const projectModalTitle = document.querySelector("[data-project-title]");
const projectModalDescription = document.querySelector("[data-project-description]");
const projectModalCloseButtons = document.querySelectorAll("[data-project-close]");
const projectModalDescriptions = {
  "Web development": "A web development concept focused on clear structure, responsive layouts, and an engaging visual experience.",
  "Web design": "A visual design study exploring composition, typography, color, and the relationship between interface and content.",
  Applications: "An application concept designed around focused interactions, useful information, and a polished user experience."
};

const closeProjectModal = function () {
  if (!projectModal) return;

  projectModal.classList.remove("active");
  projectModal.setAttribute("aria-hidden", "true");
};

const openProjectModal = function (item) {
  if (!projectModal || !projectModalImage || !projectModalTitle || !projectModalCategory || !projectModalDescription) return;

  const image = item.querySelector(".project-img img");
  const title = item.querySelector(".project-title");
  const category = item.querySelector(".project-category");

  if (!image || !title || !category) return;

  projectModalImage.src = image.src;
  projectModalImage.alt = image.alt;
  projectModalTitle.textContent = item.dataset.fileName || title.textContent.trim();
  projectModalCategory.textContent = category.textContent.trim();
  projectModalDescription.textContent = item.dataset.date || projectModalDescriptions[category.textContent.trim()] || "A portfolio project exploring thoughtful visual communication and digital craft.";
  projectModal.classList.toggle("photograph-preview", item.dataset.category === "photographs");
  projectModal.classList.add("active");
  projectModal.setAttribute("aria-hidden", "false");

  const closeButton = projectModal.querySelector(".project-modal__close");
  if (closeButton) closeButton.focus();
};

driftWalls.forEach((wall) => {
  wall.addEventListener("click", (event) => {
    const link = event.target.closest(".project-item:not([data-drift-clone]) > a");
    if (!link) return;

    event.preventDefault();
    openProjectModal(link.closest(".project-item"));
  });
});

projectModalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeProjectModal);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && projectModal && projectModal.classList.contains("active")) {
    closeProjectModal();
  }
});

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