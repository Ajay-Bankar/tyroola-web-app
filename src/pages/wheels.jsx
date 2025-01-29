import React, { useState, useEffect } from "react";

const WheelPage = () => {
  const wheelTypes = [
    { id: "suv-wheels", name: "4x4/SUV Wheels" },
    { id: "passenger-wheels", name: "Passenger Vehicle Wheels" },
    { id: "steel-wheels", name: "Steel Wheels" },
  ];

  const wheelData = {
    "suv-wheels": [
      { id: 1, name: "4x4/SUV Wheels", image: "/images/suv1.jpg", price: "$120", desc: "IFS Landcruiser Wheels (16×8)" },
      { id: 2, name: "4x4/SUV Wheels", image: "/images/suv2.jpg", price: "$76.00 – $119.00", desc: "King Wheels D-Hole Black (D-Holes)" },
      { id: 3, name: "4x4/SUV Wheels", image: "/images/suv3.jpg", price: "$120", desc: "IFS Landcruiser Wheels (17×8)" },
      { id: 4, name: "4x4/SUV Wheels", image: "/images/suv4.jpg", price: "$65.00 – $131.00", desc: "King Wheels Terra White (Triangle Holes)" },
    ],
    "passenger-wheels": [],
    "steel-wheels": [
      { id: 1, name: "4x4/SUV Wheels", image: "/images/suv3.jpg", price: "$120", desc: "IFS Landcruiser Wheels (17×8)" },
      { id: 2, name: "4x4/SUV Wheels", image: "/images/suv4.jpg", price: "$65.00 – $131.00", desc: "King Wheels Terra White (Triangle Holes)" },
    ],
  };

  const [selectedTyreType, setSelectedTyreType] = useState("suv-wheels");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${isSmallScreen ? 'flex-col' : 'flex'} min-h-screen`}>
      {/* Sidebar */}
      <aside className={`${isSmallScreen ? 'w-full' : 'w-80 min-h-screen'} bg-gray-800 text-white p-4`}>
        <h2 className="text-2xl font-bold mb-4">Product categories</h2>
        <ul className={`${isSmallScreen ? 'flex flex-row overflow-x-auto gap-2 whitespace-nowrap' : 'flex flex-col gap-2'} scrollbar-hide`}>
          {wheelTypes.map((wheel) => (
            <li
              key={wheel.id}
              className={`cursor-pointer py-1 px-4 rounded-lg ${selectedTyreType === wheel.id ? "bg-blue-500" : "hover:bg-gray-700"}`}
              onClick={() => setSelectedTyreType(wheel.id)}
            >
              {wheel.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 px-4">
        <h2 className="text-3xl font-bold p-4 text-center">
          {wheelTypes.find((wheel) => wheel.id === selectedTyreType)?.name}
        </h2>
        {wheelData[selectedTyreType].length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wheelData[selectedTyreType].map((wheel) => (
              <div key={wheel.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition flex flex-col h-full">
                <img src={wheel.image} alt={wheel.name} className="w-full h-40 object-contain rounded-lg" />
                <h3 className="text-lg font-medium mt-4">{wheel.name}</h3>
                <p className="text-black mt-2 text-sm">{wheel.desc}</p>
                <p className="text-gray-500 font-semibold text-lg mt-2">{wheel.price}</p>
                <button className="px-4 py-2 w-full bg-[#FFA500] text-white rounded-lg hover:bg-yellow-400 transition mt-4">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            <p className="text-xl font-medium">No products available for this category.</p>
            <p className="mt-2">Please check back later or explore other categories.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default WheelPage;
