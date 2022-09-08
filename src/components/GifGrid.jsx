// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  // const [images, setImages] = useState([]);

  // const getImages = async () => {
  //     const newImages = await getGifs(category);
  //     setImages(newImages);
  // }
  // useEffect(() => {
  //     getImages();
  // }, []);

  return (
    <>
      <h3>{category}</h3>
      {/* <LoadingMessage isLoading={ isLoading }/> */}
      {isLoading && <h2>Cargando...</h2>}
      {/* <p>Hola Mundo</p> */}
      <div className="card-grid">
        {images.map((img) => {
          return <GifItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
