

const FeaturedMovieList = async () => {
    const response = await fetch("http:localhost:4000/featured-comedy", {
      next: { revalidate: 30 },
    });
    const json = await response.json();
    return <>
  
      {json && json.map((item:any) => (
  
          <div className="w-1/4">
            <div className="h-full bg-white shadow-sm overflow-hidden ring rounded-lg m-3">
              <img className="object-center" src={item.image} alt={item.product_name} />
              <div className="p-6">
                <h2 className="text-base font-medium text-indigo-600 mb-1">{item.genre}</h2>
                <h1 className="text-lg font-semibold mb-3">{item.product_name}</h1>
                <p className="leading-relaxed mb-3">Price: {item.price}</p>
                <div className="flex items-center flex-wrap ">
                  <a href={`/products/${item.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">More Details
                  </a>
                </div>
              </div>
            </div>
          </div>
  
      ))
      }
  
    </>;
  };
  
  export default FeaturedMovieList;