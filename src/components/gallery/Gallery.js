import { useEffect, useState } from "react";

const AUTH_TOKEN = process.env.REACT_APP_PEXELS_AUTH_TOKEN;

function Gallery() {
  const [photos, setPhotos] = useState([]);

  const renderPhotos = async () => {
    try {
      const dataFetch = await fetch(
        "https://api.pexels.com/v1/curated?page=1&per_page=15",
        {
          method: "GET",
          headers: {
            Accept: "application",
            Authorization: AUTH_TOKEN,
          },
        }
      );
      const data = await dataFetch.json();
      if (data.photos) {
        setPhotos(data.photos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    renderPhotos();
  }, []);

  return (
    <main>
      <div className="gallery">
        {photos.map((item) => (
          <img key={item.id} src={item.src.medium} alt="" />
        ))}
      </div>
    </main>
  );
}

export default Gallery;
