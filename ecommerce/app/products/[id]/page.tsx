import AlbumArt from "@/components/productDetail";
import { IMovie } from "@/lib/interface/album";

// RSC
const AlbumDetail = async ({ params }: any) => {
  const response = await fetch(`http://localhost:4000/movies/${params.id}`);
  const album: IMovie = await response.json();

  return (
    <>
      <AlbumArt album={album}/>
    </>
  );
};

export default AlbumDetail;
