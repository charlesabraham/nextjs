"use client";

import { useCart } from "@/components/context/cart";

const CartPage = () => {
  const { items } = useCart();

  const totalPrice = items.reduce((accu, curr) => {
    return accu + curr.price;
  }, 0);

  const tax = (totalPrice / 100) * 15;

  const grandTotal = totalPrice + tax;

  const doCheckout = async () => {
    const response = await fetch("http://localhost:4000/orders", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({
        items,
        totalPrice,
        tax,
        grandTotal,
        user: "praveen@example.com",
      }),
    });

    const json = await response.json();

    alert("Order placed");
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="divide-y divide-gray-700">
        {items.map((album) => {
          return (
            <div
              key={album.id}
              className="py-4 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Album"
                  className="w-16 h-16"
                />
                <div>
                  <p className="text-md font-bold">{album.name}</p>
                  <p className="text-xs text-gray-400">By Singer</p>
                </div>
              </div>
              <div>
                <input
                  type="number"
                  className="bg-gray-700 text-white rounded px-2 py-1 w-16"
                  value="1"
                />
              </div>
              <button className="text-red-400 hover:text-red-300 material-icons">
                delete
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <input
          type="text"
          className="bg-gray-700 text-white rounded px-2 py-1 w-1/2"
          placeholder="Enter Discount Code"
        />
        <button className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-300 ml-2">
          Apply
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">Summary</h2>
        <div className="flex justify-between items-center">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Taxes</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-2xl font-bold">
          <span>Grand Total</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={doCheckout}
          className="bg-green-400 text-white px-8 py-3 rounded hover:bg-green-300 w-full"
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default CartPage;
