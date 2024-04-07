"use client"
import { IMovie } from "@/lib/interface/album";
import { useCart } from "../context/cart";



export interface AlbumArtProps {
  album: IMovie;
}

const AlbumArt = ({ album }: AlbumArtProps) => {
    const { addToCart } = useCart()

  return (


    <div className="container mx-auto mt-10">
        <div className="flex flex-col md:flex-row">
            <div className="md:flex-shrink-0">
                <img className="rounded-lg md:w-56" src={album.image} alt={album.product_name}/>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
                <h1 className="text-xl font-bold text-gray-900">{album.product_name}</h1>
                <p className="mt-2 text-gray-600">Genre : {album.genre}</p>
                <div className="mt-3">
                    <span className="text-gray-500">Price:</span>
                    <span className="ml-1 text-gray-900 font-bold">{album.price}</span>
                </div>
                <div className="mt-6">
                    <button className="px-8 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700" 
                    
                    onClick={() => {
            addToCart(album);
          }}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>




 /*
    <div className="relative">

      <div className="absolute top-4 left-4">
        <h1 className="text-4xl font-bold text-white">{album.product_name}</h1>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center space-x-4">
        <button
          className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-300"
        >
          Add to Cart
        </button>

      </div>
    </div>
  */ 

  );
};

export default AlbumArt;
