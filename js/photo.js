const params = new URLSearchParams(window.location.search);
const img = params.get("id");

const image = document.getElementById("photo");
image.src = `images/${img}`;

const download = document.getElementById("download");
download.href = `images/${img}`;
download.download = img;
