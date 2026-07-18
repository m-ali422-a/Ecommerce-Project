import { ProductCardData } from "../data/ProductCardData";

const Products = ({ changeCategory }) => {
  const filtereProducts =
    changeCategory === "All"
      ? ProductCardData
      : ProductCardData.filter((item) => item.category === changeCategory);

  return (
    <div>
      <h2 className="text-3xl text-center font-semibold mb-8 uppercase tracking-wide pt-15">
        Trending Products
      </h2>

      <div className="grid grid-cols-4 gap-6 px-30 pt-10">
        {filtereProducts?.map((e) => (
          <div
            key={e.id}
            className="bg-white flex flex-col rounded-xl shadow-xl/20 overflow-hidden hover:shadow-xl/30 transition duration-300 hover:-translate-y-2"
          >
            <img
              src={e.image}
              alt={e.name}
              className="w-full h-50 object-contain"
            />

            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-semibold">{e.name}</h2>

              <p className="text-gray-500">{e.category}</p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold text-black">₹{e.price}</span>

                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
