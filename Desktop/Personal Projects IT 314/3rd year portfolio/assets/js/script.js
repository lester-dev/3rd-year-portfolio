'use strict';

const elementToggleFunc = function (elem) {
  if (elem) elem.classList.toggle("active");
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () {
    const isExpanded = sidebar.classList.toggle("active");
    sidebarBtn.setAttribute("aria-expanded", String(isExpanded));
    sidebarBtn.setAttribute("aria-label", isExpanded ? "Hide contacts" : "Show contacts");
    const buttonText = sidebarBtn.querySelector("span");
    if (buttonText) buttonText.textContent = isExpanded ? "Hide Contacts" : "Show Contacts";
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
    const isExpanded = !this.classList.contains("active");
    this.classList.toggle("active", isExpanded);
    this.setAttribute("aria-expanded", String(isExpanded));
  });
}

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();

    if (selectValue) {
      selectValue.innerText = this.innerText;
    }

    if (select) elementToggleFunc(select);
    if (select) select.setAttribute("aria-expanded", "false");
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

  if (photographGallery) {
    photographGallery.classList.toggle("videos-view", selectedValue === "videos");
    photographGallery.classList.toggle("side-projects-view", selectedValue === "side projects");
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
  "18.png",
  "18th.png",
  "5 man 2.0.png",
  "5 man.png",
  "Champion.png",
  "eight.png",
  "eighteen.png",
  "IT 1101 Jaguar.png",
  "Jiro.png",
  "quadro 2.0.png",
  "Quadro.png",
  "Screenshot 2026-09-08 232131.png",
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
  "untitled-73.JPG",
  "Sienna-7.jpg",
  "Sienna-27.jpg",
  "Sienna-28.jpg",
  "Sienna-31.jpg",
  "Sienna-123.jpg",
  "Sienna-124.jpg"
];

const graphicDesignImages = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "Astra Zenith.png",
  "Astra.png",
  "BB Sando.png",
  "Brutalism.png",
  "CL1.png",
  "Civic.png",
  "Coffee Poster.png",
  "DP Blast.png",
  "Final Sando.png",
  "Final final.png",
  "Football Jersey.png",
  "Hev Abi.png",
  "Pogacar.png",
  "Polo Design 1.png",
  "Polo Design 2.png",
  "Polo Design 3.png",
  "Polo Design 4.png",
  "Polo Design 5.png",
  "Polo Design 6.png",
  "Polo Design 7.png",
  "Polo Design 8.png",
  "Polo Design 9.png",
  "Polo Design 10.png",
  "Polo Design 11.png",
  "Polo Design 12.png",
  "Polo Design 13.png",
  "Polo Design 14.png",
  "Polo Design 15.png",
  "Poster.png",
  "Sherwin and Me.png",
  "TIP.png",
  "Try 2.png",
  "Try.png",
  "Valentines.png",
  "_.png",
  "astra vneck.png",
  "honda civic.png",
  "myworks.jpg",
  "myworks2.jpg",
  "nike.png",
  "pubmat.png",
  "soon.png"
];

const sideProjectImages = [
  "Data Visualization For Restaurant.png",
  "Python Fare Calculation.png",
  "Sales Report Dashboard.png",
  "Simple Finance Tracker.png",
  "UIUX Pharmacy System.png",
  "Wifi Signal Strength Simulator.png"
];

const sideProjectDetails = {
  "Data Visualization For Restaurant.png": {
    description: "Project link:",
    descriptionUrl: "https://tinyurl.com/Data-Studio-Project"
  },
  "Python Fare Calculation.png": {
    description: "A simple calculator fare for tourist and local in Mabini Batangas"
  },
  "Sales Report Dashboard.png": {
    description: "A data visualization insights for the Sales of the Company"
  },
  "Simple Finance Tracker.png": {
    description: "Project link:",
    descriptionUrl: "https://finance-tracker-try.vercel.app/"
  },
  "UIUX Pharmacy System.png": {
    description: "Project link:",
    descriptionUrl: "https://tinyurl.com/Pharmacy-Prototype"
  },
  "Wifi Signal Strength Simulator.png": {
    description: "Project link:",
    descriptionUrl: "https://wifi-simulator.vercel.app/"
  }
};

const videoEntries = [
  {
    fileName: "Outing",
    href: "./assets/images/Videos/Outing.mp4",
    kind: "video",
    src: "./assets/images/Videos/Outing.mp4"
  },
  {
    fileName: "rotoms",
    href: "./assets/images/Videos/rotoms.mp4",
    kind: "video",
    src: "./assets/images/Videos/rotoms.mp4"
  },
  {
    fileName: "Dswak Year End",
    kind: "image",
    src: "./assets/images/Videos/Dswak Year End.jpg",
    descriptionUrl: "https://www.facebook.com/share/v/1FZ8dWZd58/"
  },
  {
    fileName: "Siklaban",
    kind: "image",
    src: "./assets/images/Videos/Siklaban.png",
    descriptionUrl: "https://www.facebook.com/share/v/1Hszf3EJ3P/"
  }
];

const portfolioEntries = [
  ...photographImages.map((fileName) => ({
    category: "photographs",
    fileName,
    kind: "image",
    src: `./assets/images/Photographs/${fileName}`,
    date: photographDates[fileName] || ""
  })),
  ...graphicDesignImages.map((fileName) => ({
    category: "graphic design",
    fileName,
    kind: "image",
    src: `./assets/images/Graphic Design/${fileName}`,
    date: ""
  })),
  ...sideProjectImages.map((fileName, index) => ({
    category: "side projects",
    fileName,
    kind: "image",
    src: `./assets/images/Side Projects/${fileName}`,
    date: "",
    description: sideProjectDetails[fileName].description,
    descriptionUrl: sideProjectDetails[fileName].descriptionUrl || "",
    layoutPosition: index + 1
  })),
  ...videoEntries.map((entry) => ({
    category: "videos",
    fileName: entry.fileName,
    kind: entry.kind,
    src: entry.src,
    href: entry.href || "",
    descriptionUrl: entry.descriptionUrl || "",
    date: ""
  }))
];

const portfolioImageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const image = entry.target;
    image.src = image.dataset.src;
    delete image.dataset.src;
    observer.unobserve(image);
  });
}, { rootMargin: "400px 0px" });

if (photographGallery) {
  photographGallery.replaceChildren();

  portfolioEntries.forEach((entry, index) => {
    const item = document.createElement("li");
    const card = document.createElement(entry.kind === "video" ? "div" : "a");
    const figure = document.createElement("figure");
    const icon = document.createElement("div");
    const iconElement = document.createElement("ion-icon");
    const media = document.createElement(entry.kind === "video" ? "video" : "img");
    const title = document.createElement("h3");
    const category = document.createElement("p");
    const displayName = entry.category === "side projects" ? entry.fileName.replace(/\.png$/i, "") : entry.fileName;

    card.className = "project-card";
    if (entry.kind !== "video") {
      card.href = entry.src;
    }
    item.className = "project-item active";
    item.dataset.filterItem = "";
    item.dataset.category = entry.category;
    item.dataset.fileName = displayName;
    item.dataset.date = entry.date;
    item.dataset.kind = entry.kind;
    if (entry.description) {
      item.dataset.description = entry.description;
    }
    if (entry.descriptionUrl) {
      item.dataset.descriptionUrl = entry.descriptionUrl;
    }
    if (entry.layoutPosition) {
      item.dataset.layoutPosition = entry.layoutPosition;
    }
    figure.className = "project-img";
    icon.className = "project-item-icon-box";
    iconElement.setAttribute("name", "eye-outline");
    if (entry.kind === "video") {
      media.controls = true;
      media.preload = "none";
      media.playsInline = true;
      media.setAttribute("aria-label", entry.fileName);
    } else {
      media.alt = entry.fileName;
      media.loading = "lazy";
      media.decoding = "async";
      media.dataset.src = entry.src;
    }
    if (entry.kind === "video") {
      media.src = entry.src;
    }
    title.className = "project-title";
    title.textContent = displayName;
    category.className = "project-category";
    category.textContent = entry.category === "photographs" ? "Photographs" : entry.category === "graphic design" ? "Graphic Design" : entry.category === "side projects" ? "Side Projects" : "Videos";

    icon.appendChild(iconElement);
    figure.append(icon, media);
    card.append(figure, title, category);
    item.appendChild(card);
    photographGallery.appendChild(item);
    if (entry.kind !== "video") {
      portfolioImageObserver.observe(media);
    }
  });
}

const driftWalls = document.querySelectorAll("[data-drift-wall]");

driftWalls.forEach((wall) => {
  const sourceItems = Array.from(wall.querySelectorAll(".project-item:not([data-drift-clone])"));
  const isPhotographWall = wall.hasAttribute("data-photograph-gallery");
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
    if (wall.hasAttribute("data-no-duplicate") || isPhotographWall) {
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

  if (isPhotographWall) {
    const offsets = columns.map(() => 0);
    let lastTimestamp = null;
    let animationFrameId = null;
    let isWallInView = false;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    columns.forEach((track) => {
      track.style.animation = "none";
    });

    const animatePhotographs = (timestamp) => {
      animationFrameId = null;
      if (!isWallInView || document.visibilityState !== "visible" || prefersReducedMotion.matches) {
        lastTimestamp = null;
        return;
      }

      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = Math.min(0.05, (timestamp - lastTimestamp) / 1000);
      lastTimestamp = timestamp;

      columns.forEach((track, index) => {
        const item = track.firstElementChild;
        if (!item) return;

        const itemHeight = item.getBoundingClientRect().height;
        const direction = index % 2 === 0 ? 1 : -1;
        offsets[index] += 32 * delta * direction;

        if (direction > 0 && offsets[index] >= itemHeight) {
          track.appendChild(item);
          offsets[index] -= itemHeight;
        } else if (direction < 0 && offsets[index] <= -itemHeight) {
          track.insertBefore(track.lastElementChild, track.firstElementChild);
          offsets[index] += itemHeight;
        }

        track.style.transform = `translate3d(0, ${-offsets[index]}px, 0)`;
      });

      animationFrameId = requestAnimationFrame(animatePhotographs);
    };

    const stopPhotographAnimation = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      lastTimestamp = null;
    };

    const syncPhotographAnimation = () => {
      if (!isWallInView || document.visibilityState !== "visible" || prefersReducedMotion.matches) {
        stopPhotographAnimation();
        return;
      }

      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(animatePhotographs);
      }
    };

    const wallObserver = new IntersectionObserver((entries) => {
      isWallInView = entries.some((entry) => entry.isIntersecting);
      syncPhotographAnimation();
    });

    wallObserver.observe(wall);
    document.addEventListener("visibilitychange", syncPhotographAnimation);
    prefersReducedMotion.addEventListener("change", syncPhotographAnimation);
  }

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
const projectModalMeta = document.querySelector("[data-project-meta]");
const projectModalPrevBtn = document.querySelector("[data-modal-prev]");
const projectModalNextBtn = document.querySelector("[data-modal-next]");
const projectModalCloseButtons = document.querySelectorAll("[data-project-close]");

const projectModalDescriptions = {
  "Web development": "A web development concept focused on clear structure, responsive layouts, and an engaging visual experience.",
  "Web design": "A visual design study exploring composition, typography, color, and the relationship between interface and content.",
  Applications: "An application concept designed around focused interactions, useful information, and a polished user experience.",
  "Graphic Design": "A visual design study exploring composition, typography, color, and creative storytelling.",
  "Side Projects": "A personal project exploring ideas, experimentation, and practical creative problem-solving.",
  Videos: "A motion and storytelling piece created to capture moments, energy, and creative direction."
};

let currentModalIndex = -1;
let currentActiveItems = [];

const closeProjectModal = function () {
  if (!projectModal) return;

  projectModal.classList.remove("active");
  projectModal.setAttribute("aria-hidden", "true");
  currentModalIndex = -1;
};

const renderModalItem = function (item) {
  if (!projectModal || !projectModalImage || !projectModalTitle || !projectModalCategory || !projectModalDescription) return;

  const image = item.querySelector(".project-img img");
  const title = item.querySelector(".project-title");
  const category = item.querySelector(".project-category");
  const imageSource = image && (image.currentSrc || image.dataset.src);

  if (!image || !imageSource || !title || !category) return;

  projectModalImage.src = imageSource;
  projectModalImage.alt = image.alt;
  projectModalTitle.textContent = item.dataset.fileName || title.textContent.trim();
  projectModalCategory.textContent = category.textContent.trim();
  projectModalDescription.textContent = item.dataset.description || item.dataset.date || projectModalDescriptions[category.textContent.trim()] || "A portfolio project exploring thoughtful visual communication and digital craft.";

  if (projectModalMeta) {
    projectModalMeta.replaceChildren();
    const cat = item.dataset.category;
    if (cat === "photographs") {
      const cameraPill = document.createElement("span");
      cameraPill.className = "meta-pill";
      cameraPill.innerHTML = '<ion-icon name="camera-outline"></ion-icon> Canon EOS';

      const aperturePill = document.createElement("span");
      aperturePill.className = "meta-pill";
      aperturePill.textContent = "ƒ/1.8";

      const shutterPill = document.createElement("span");
      shutterPill.className = "meta-pill";
      shutterPill.textContent = "1/500s";

      const isoPill = document.createElement("span");
      isoPill.className = "meta-pill";
      isoPill.textContent = "ISO 100";

      projectModalMeta.append(cameraPill, aperturePill, shutterPill, isoPill);

      if (item.dataset.date) {
        const datePill = document.createElement("span");
        datePill.className = "meta-pill";
        datePill.textContent = item.dataset.date;
        projectModalMeta.appendChild(datePill);
      }
    } else if (cat === "graphic design") {
      const toolPill = document.createElement("span");
      toolPill.className = "meta-pill";
      toolPill.innerHTML = '<ion-icon name="color-palette-outline"></ion-icon> Adobe CC / Design';

      const resPill = document.createElement("span");
      resPill.className = "meta-pill";
      resPill.textContent = "300 DPI Vector/Raster";

      projectModalMeta.append(toolPill, resPill);
    } else if (cat === "side projects") {
      const techPill = document.createElement("span");
      techPill.className = "meta-pill";
      techPill.innerHTML = '<ion-icon name="code-slash-outline"></ion-icon> IT Project';

      projectModalMeta.appendChild(techPill);
    }
  }

  if (item.dataset.descriptionUrl) {
    const link = document.createElement("a");
    link.href = item.dataset.descriptionUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = item.dataset.category === "videos" ? "Watch on Facebook" : "Open project";
    projectModalDescription.append(" ", link);
  }

  projectModal.classList.toggle("photograph-preview", item.dataset.category === "photographs");
};

const openProjectModal = function (item) {
  if (!projectModal) return;

  currentActiveItems = Array.from(document.querySelectorAll(".drift-wall .project-item.active:not([data-drift-clone])"));
  currentModalIndex = currentActiveItems.indexOf(item);

  renderModalItem(item);
  if (typeof playShutterSound === "function") playShutterSound();

  projectModal.classList.add("active");
  projectModal.setAttribute("aria-hidden", "false");

  const closeButton = projectModal.querySelector(".project-modal__close");
  if (closeButton) closeButton.focus();
};

const navigateModal = function (direction) {
  if (currentActiveItems.length === 0 || currentModalIndex < 0) return;

  currentModalIndex = (currentModalIndex + direction + currentActiveItems.length) % currentActiveItems.length;
  renderModalItem(currentActiveItems[currentModalIndex]);
  if (typeof playShutterSound === "function") playShutterSound();
};

if (projectModalPrevBtn) {
  projectModalPrevBtn.addEventListener("click", () => navigateModal(-1));
}

if (projectModalNextBtn) {
  projectModalNextBtn.addEventListener("click", () => navigateModal(1));
}

driftWalls.forEach((wall) => {
  wall.addEventListener("click", (event) => {
    const link = event.target.closest(".project-item:not([data-drift-clone]) > a, .project-item:not([data-drift-clone]) > .project-card");
    if (!link) return;

    const item = link.closest(".project-item");
    if (!item) return;

    event.preventDefault();

    if (item.dataset.kind === "video") {
      const videoSource = item.dataset.videoSrc || link.href;
      if (videoModalVideo) {
        videoModalVideo.src = videoSource;
        videoModalVideo.setAttribute("poster", item.querySelector("img")?.src || "");
      }
      openVideoModal();
      return;
    }

    openProjectModal(item);
  });
});

projectModalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeProjectModal);
});

document.addEventListener("keydown", function (event) {
  if (projectModal && projectModal.classList.contains("active")) {
    if (event.key === "Escape") {
      closeProjectModal();
    } else if (event.key === "ArrowLeft") {
      navigateModal(-1);
    } else if (event.key === "ArrowRight") {
      navigateModal(1);
    }
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
const formFeedback = document.querySelector("[data-form-feedback]");

formInputs.forEach((input) => {
  const updateContactForm = () => {
    if (input.name === "fullname") {
      input.setCustomValidity(input.value.trim().length >= 2 ? "" : "Please enter your name.");
    } else if (input.name === "message") {
      input.setCustomValidity(input.value.trim().length >= 10 ? "" : "Please add at least 10 non-space characters.");
    }

    if (formFeedback) formFeedback.replaceChildren();
  };

  input.addEventListener("input", updateContactForm);
  input.addEventListener("change", updateContactForm);
});

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const fullName = String(formData.get("fullname")).trim();
    const email = String(formData.get("email")).trim();
    const service = String(formData.get("service")).trim();
    const message = String(formData.get("message")).trim();
    const subject = `Portfolio inquiry: ${service} - ${fullName}`;
    const body = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      message
    ].join("\n");
    const mailtoUrl = `mailto:itsmelesteradalia@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (formFeedback) {
      formFeedback.textContent = "Your email app should open with this message ready to review. It will only be sent after you press Send. If it does not open, email ";

      const emailLink = document.createElement("a");
      emailLink.className = "form-feedback-link";
      emailLink.href = mailtoUrl;
      emailLink.textContent = "Lester directly";
      formFeedback.append(emailLink, ".");
    }

    window.location.href = mailtoUrl;
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

    window.scrollTo(0, 0);
  });
}

// ==========================================
// DYNAMIC PORTFOLIO 2.0 ENHANCEMENTS
// ==========================================

// 1. Synthesized Camera Shutter Audio (Web Audio API)
let sfxEnabled = localStorage.getItem("portfolio_sfx") !== "false";
const sfxToggleBtn = document.querySelector("[data-sfx-toggle]");
const sfxText = document.querySelector("[data-sfx-text]");

const updateSfxButton = () => {
  if (!sfxToggleBtn) return;
  const icon = sfxToggleBtn.querySelector("ion-icon");
  if (icon) icon.setAttribute("name", sfxEnabled ? "volume-high-outline" : "volume-mute-outline");
  if (sfxText) sfxText.textContent = sfxEnabled ? "SFX: ON" : "SFX: OFF";
};

updateSfxButton();

const playShutterSound = () => {
  if (!sfxEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === "suspended") ctx.resume();

    const now = ctx.currentTime;

    // Curtain 1
    const noise1 = ctx.createBufferSource();
    const buf1 = ctx.createBuffer(1, ctx.sampleRate * 0.035, ctx.sampleRate);
    const d1 = buf1.getChannelData(0);
    for (let i = 0; i < buf1.length; i++) d1[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.007));
    noise1.buffer = buf1;

    const filter1 = ctx.createBiquadFilter();
    filter1.type = "bandpass";
    filter1.frequency.setValueAtTime(1100, now);
    filter1.Q.setValueAtTime(3, now);

    const gain1 = ctx.createGain();
    gain1.gain.setValueAtTime(0.35, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.03);

    noise1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(ctx.destination);
    noise1.start(now);

    // Curtain 2 (40ms later)
    const noise2 = ctx.createBufferSource();
    const buf2 = ctx.createBuffer(1, ctx.sampleRate * 0.045, ctx.sampleRate);
    const d2 = buf2.getChannelData(0);
    for (let i = 0; i < buf2.length; i++) d2[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.008));
    noise2.buffer = buf2;

    const filter2 = ctx.createBiquadFilter();
    filter2.type = "bandpass";
    filter2.frequency.setValueAtTime(750, now + 0.04);
    filter2.Q.setValueAtTime(2.5, now + 0.04);

    const gain2 = ctx.createGain();
    gain2.gain.setValueAtTime(0.4, now + 0.04);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

    noise2.connect(filter2);
    filter2.connect(gain2);
    gain2.connect(ctx.destination);
    noise2.start(now + 0.04);
  } catch (e) {
    // Audio fallback
  }
};

if (sfxToggleBtn) {
  sfxToggleBtn.addEventListener("click", () => {
    sfxEnabled = !sfxEnabled;
    localStorage.setItem("portfolio_sfx", String(sfxEnabled));
    updateSfxButton();
    if (sfxEnabled) {
      playShutterSound();
      showToast("Camera sound effects enabled");
    } else {
      showToast("Sound effects muted");
    }
  });
}

// 2. Floating Toast Notification
const toastEl = document.querySelector("[data-toast]");
let toastTimer = null;
const showToast = (message) => {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add("active");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("active");
  }, 2600);
};

// 3. Quick Email Copy to Clipboard
const copyEmailBtns = document.querySelectorAll("[data-copy-email]");
copyEmailBtns.forEach(btn => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const email = btn.dataset.copyEmail || "itsmelesteradalia@gmail.com";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email address copied to clipboard!");
      }).catch(() => {
        showToast("Copied: " + email);
      });
    } else {
      showToast("Copied: " + email);
    }
    playShutterSound();
  });
});

// 4. View Mode Switcher (Responsive Grid vs 3D Drifting Wall)
const viewModeBtns = document.querySelectorAll("[data-view-mode]");
viewModeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.viewMode;
    viewModeBtns.forEach(b => {
      const isActive = b === btn;
      b.classList.toggle("active", isActive);
      b.setAttribute("aria-pressed", String(isActive));
    });

    if (photographGallery) {
      photographGallery.classList.toggle("grid-view", mode === "grid");
    }

    if (mode === "grid") {
      showToast("Switched to Responsive Grid View");
    } else {
      showToast("Switched to 3D Drifting Wall View");
    }
    playShutterSound();
  });
});

// 5. Interactive Before / After Color Grading Slider
const baBox = document.querySelector("[data-before-after]");
const baSlider = document.querySelector("[data-ba-slider]");
if (baBox && baSlider) {
  const updateBaSlider = (val) => {
    baBox.style.setProperty("--slider-pos", val + "%");
  };
  baSlider.addEventListener("input", (e) => updateBaSlider(e.target.value));
  updateBaSlider(baSlider.value);
}

// 6. Animated Metrics Numbers on Scroll
const metricNumbers = document.querySelectorAll(".metric-number[data-count]");
if (metricNumbers.length > 0) {
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      obs.unobserve(entry.target);
      const target = parseInt(entry.target.dataset.count, 10);
      if (!target) return;
      const duration = 1600;
      const start = performance.now();
      const update = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(ease * target);
        entry.target.textContent = current >= 10000 ? "10K+" : current + "+";
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    });
  }, { threshold: 0.3 });

  metricNumbers.forEach(num => counterObserver.observe(num));
}

// 7. Mouse Spotlight Illumination across Cards
if (window.matchMedia("(hover: hover)").matches) {
  document.addEventListener("pointermove", (e) => {
    const cards = document.querySelectorAll(".content-card, .metric-card, .gear-card, .service-item, .competency-card");
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}