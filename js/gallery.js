const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMoreBtn");

const popover = document.getElementById("imgPopover");
const popoverImg = document.getElementById("popoverImg");
const popoverDownload = document.getElementById("popoverDownload");

let allImages = [];
let currentIndex = 0;
const BATCH_SIZE = 3;

fetch("data/images.json")
  .then(res => res.json())
  .then(images => {
    allImages = images.reverse(); // latest first
    document.getElementById("count").innerText = `${allImages.length}`;
    loadNextBatch();
    if (allImages.length > BATCH_SIZE) {
      loadMoreBtn.hidden = false;
    }
  });

function loadNextBatch() {
  const nextImages = allImages.slice(
    currentIndex,
    currentIndex + BATCH_SIZE
  );

  nextImages.forEach(img => {
    const div = document.createElement("div");
    div.className = "gallery-item";

    /* Skeleton */
    const skeleton = document.createElement("div");
    skeleton.className = "skeleton";

    const image = document.createElement("img");
    image.src = `images/${img}`;
    image.loading = "lazy";

    /* Jab image load ho jaaye */
    image.onload = () => {
      skeleton.remove();
      image.classList.add("loaded");
    };

    image.onclick = () => {
      popoverImg.src = `images/${img}`;
      popoverDownload.href = `images/${img}`;
      popover.showPopover(); // native popover
    };

    div.appendChild(skeleton);
    div.appendChild(image);
    gallery.appendChild(div);
  });

  currentIndex += BATCH_SIZE;

  // अगर images खत्म हो गईं
  if (currentIndex >= allImages.length) {
    // loadMoreBtn.style.display = "none";
    loadMoreBtn.hidden = true;
  }
}

loadMoreBtn.addEventListener("click", loadNextBatch);



// const popover = document.getElementById("imgPopover");
// const popoverImg = document.getElementById("popoverImg");
// const popoverDownload = document.getElementById("popoverDownload");

// fetch("data/images.json")
//   .then(res => res.json())
//   .then(images => {
//     images.reverse(); // latest first

//     const gallery = document.getElementById("gallery");
//     document.getElementById("count").innerText = `Total Photos: ${images.length}`;

//     images.forEach(img => {
//       const div = document.createElement("div");
//       div.className = "gallery-item";

//       const image = document.createElement("img");
//       image.src = `images/${img}`;
//       image.loading = "lazy";

//       image.onclick = () => {
//         popoverImg.src = `images/${img}`;
//         popoverDownload.href = `images/${img}`;
//         popover.showPopover(); // ⭐ native API
//       };

//       div.appendChild(image);
//       gallery.appendChild(div);
//     });
//   });


// fetch("data/images.json")
//   .then(res => res.json())
//   .then(images => {
//     images.reverse(); // latest first

//     const gallery = document.getElementById("gallery");
//     document.getElementById("count").innerText = `Total Photos: ${images.length}`;

//     images.forEach(img => {
//       const div = document.createElement("div");
//       div.className = "gallery-item";

//       const image = document.createElement("img");
//       image.src = `images/${img}`;
//       image.loading = "lazy";

//       image.onclick = () => openLightbox(img);

//       div.appendChild(image);
//       gallery.appendChild(div);
//     });
//   });

// /* Lightbox logic */
// const lightbox = document.getElementById("lightbox");
// const lightboxImg = document.getElementById("lightbox-img");
// const downloadBtn = document.getElementById("downloadBtn");

// function openLightbox(img) {
//   lightbox.style.display = "flex";
//   lightboxImg.src = `images/${img}`;
//   downloadBtn.href = `images/${img}`;
// }

// document.getElementById("close").onclick = () => {
//   lightbox.style.display = "none";
// };

// fetch("data/images.json")
//   .then(res => res.json())
//   .then(images => {
//     images.reverse();
//     document.getElementById("count").innerText = `Total Photos: ${images.length}`;

//     const gallery = document.getElementById("gallery");

//     images.forEach(img => {
//       const a = document.createElement("a");
//       a.href = `photo.html?id=${encodeURIComponent(img)}`;

//       const image = document.createElement("img");
//       image.src = `images/${img}`;
//       image.loading = "lazy";

//       a.appendChild(image);
//       gallery.appendChild(a);
//     });
//   });
