const Navbar = () => {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Oslo",
    },
    {
      id: 3,
      name: "Berlin",
    },
    {
      id: 4,
      name: "Sydney",
    },
    {
      id: 5,
      name: "Paris",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-around py-6">
        {cities.map((city) => {
          return (
            <>
              <button
                key={city.id}
                className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
              >
                {city.name}
              </button>
            </>
          );
        })}
        ;
      </div>
    </>
  );
};

export default Navbar;
