import { useEffect, useState } from "react";
function Gallery() {
  const auth = "563492ad6f9170000100000180b552d6cce84592b36d72024d9350df";

  async function renderPhotos() {
    const dataFetch = await fetch(
      "https://api.pexels.com/v1/curated?page=1&per_page=15",
      {
        method: "GET",
        headers: {
          Accept: "application",
          Authorization: auth,
        },
      }
    );
    const data = await dataFetch.json();
    data.photos.forEach((photo) => {
      console.log(photo);
      setRenderData(renderData.photo);
      // const galleryImg = document.createElement("div");
      // galleryImg.classList.add("gallery-img");
      // galleryImg.innerHTML = `
      // <img src=${photo.src.large}></img>
      // <p>${photo.photographer}</p>`;
    });
  }
  const [renderData, setRenderData] = useState([]);
  useEffect(() => {
    renderPhotos();
  });
  return (
    <main>
      <div className="gallery">{renderData}</div>
    </main>
  );
}

export default Gallery;
