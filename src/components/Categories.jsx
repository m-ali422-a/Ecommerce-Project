import categoryData from "../data/CategoryData";

const Categories = ({ changeCategory , name="Categories" }) => {
  return (
    <div>
        <h2 className="text-4xl text-center font-semibold mb-8 uppercase tracking-wider pt-10">
          {name}
        </h2>
        <div className="flex justify-center items-center gap-10">
          {categoryData?.map((category) => (
            <div
              key={category.id}
              className="text-center cursor-pointer"
              onClick={() => changeCategory(category.name)}
            >
              {/* Rounded Image */}
              <div className="w-30 h-30 rounded-full overflow-hidden shadow-lg hover:scale-104 transition duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Text Outside Image */}
              <h3 className="mt-4 text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Categories;
