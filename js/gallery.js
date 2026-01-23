fetch("data/images.json")
  .then(res => res.json())
  .then(images => {
    images.reverse(); // latest first

    const gallery = document.getElementById("gallery");
    document.getElementById("count").innerText = `Total Photos: ${images.length}`;

    images.forEach(img => {
      const div = document.createElement("div");
      div.className = "gallery-item";

      const image = document.createElement("img");
      image.src = `images/${img}`;
      image.loading = "lazy";

      image.onclick = () => openLightbox(img);

      div.appendChild(image);
      gallery.appendChild(div);
    });
  });

/* Lightbox logic */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const downloadBtn = document.getElementById("downloadBtn");

function openLightbox(img) {
  lightbox.style.display = "flex";
  lightboxImg.src = `images/${img}`;
  downloadBtn.href = `images/${img}`;
}

document.getElementById("close").onclick = () => {
  lightbox.style.display = "none";
};

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
