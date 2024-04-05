{/*
const Homepage = () => {
    return (
      <>
<div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div>
                    <h2 className="text-3xl font-extrabold text-white">Seasonal Sale</h2>
                    <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">Check out our latest collection on sale this season. Don't miss out on our best prices!</p>
                    <div className="mt-8 sm:flex">
                        <div className="rounded-md shadow">
                            <a href="/products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"> Shop Now </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 lg:mt-0">
                    <img className="rounded-lg shadow-lg w-full" src="https://robohash.org/4R3.png?set=set1&size=600x600" alt="Seasonal Sale Banner"/>
                </div>
            </div>
        </div>
    </div>


     <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a href="/product-detail" className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://robohash.org/XXY.png?set=set1&size=350x200"/>
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">Product Name</h2>
                        <p className="mt-1">£Price</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      </>
    );
  };

  export default Homepage;

*/}
import { promises as fs } from 'fs';


  export default async function Page() {
    const file = await fs.readFile(process.cwd() + '/data/db.json', 'utf8');
    const data = JSON.parse(file);

    return (

        <div>
          
   {data &&
        data.map((item, i) => (
          <div key={i}>
            

            <div className="h-full bg-white shadow-sm rounded-md overflow-hidden">
                        <img className="object-center" src={item.image} alt="product name"/>
                        <div className="p-6">
                            <h2 className="text-base font-medium text-indigo-600 mb-1">{item.genre}</h2>
                            <h1 className="text-lg font-semibold mb-3">{item.product_name}</h1>
                            <p className="leading-relaxed mb-3">{item.price}</p>
                            <div className="flex items-center flex-wrap ">
                                <a href="product-detail.html" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                </a>
                            </div>
                        </div>
                    </div>

          </div>
        ))
      }


        </div>

      );

  }