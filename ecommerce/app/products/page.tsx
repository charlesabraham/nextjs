import MovieList from "@/components/productlist";

const ProductPage = () => {
    return (

        <main className="my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/4 md:w-1/2">

                <MovieList/>

                </div>
            </div>
        </div>
    </main>

    );
  };

  export default ProductPage;