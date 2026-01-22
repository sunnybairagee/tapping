fetch("data/images.json")
  .then(res => res.json())
  .then(images => {
    document.getElementById("count").innerText = `Total Photos: ${images.length}`;

    const gallery = document.getElementById("gallery");

    images.forEach(img => {
      const a = document.createElement("a");
      a.href = `photo.html?id=${encodeURIComponent(img)}`;

      const image = document.createElement("img");
      image.src = `images/${img}`;
      image.loading = "lazy";

      a.appendChild(image);
      gallery.appendChild(a);
    });
  });
