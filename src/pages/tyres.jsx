import React, { useState, useEffect } from "react";

const TyrePage = () => {
  const tyreTypes = [
    { id: "all-terrain", name: "All Terrain" },
    { id: "mud-terrain", name: "Mud Terrain" },
    { id: "commercial", name: "Commercial" },
    { id: "passenger", name: "Passenger" },
  ];

  const tyreData = {
    "mud-terrain": [
      { id: 1, name: "Delmax", image: "/images/mud1.jpg", price: "$120", desc:"ROCKBLADE 145R12C 86/84Q ROCK 818" },
      { id: 2, name: "Annaite", image: "/images/mud2.jpg", price: "$150",desc:"ROCKBLADE 31X10.50R15LT 109Q ROCK 757 M/T" },
      { id: 3, name: " Aplus", image: "/images/mud3.jpg", price: "$120",desc:"175/65R15 84H BLUEARTH AE01" },
      { id: 4, name: "Delmax", image: "/images/mud4.jpg", price: "$150" ,desc:"ROCKBLADE LT215/85R16 115/112Q ROCK 757 M/T"},
    ],
    commercial: [
      { id: 1, name: "Delmax", image: "/images/comm1.jpg", price: "$100",desc:"185/75R16C 8PR 104/102R NOV269" },
      { id: 2, name: "Hankook", image: "/images/comm2.jpg", price: "$130",desc:"195/75R16C 110/108Q 857 ***LIGHT TRUCK*** (VIET) " },
    ],
    "all-terrain": [
      { id: 1, name: "Delmax", image: "/images/all1.jpg", price: "$140",desc:"165/60R14 75H NOV412" },
      { id: 2, name: " Aplus", image: "/images/all2.jpg", price: "$120",desc:"175/65R15 84H BLUEARTH AE01" },
      { id: 3, name: "Delmax", image: "/images/all3.jpg", price: "$150" ,desc:"ROCKBLADE LT215/85R16 115/112Q ROCK 757 M/T"},
      { id: 4, name: " Annaite", image: "/images/all4.jpg", price: "$80",desc:"165/60R14 75H NOV412" },
      { id: 5, name: "Delmax", image: "/images/all5.jpg", price: "$90" ,desc:"155/80R13 79T NOV125"},
      { id: 6, name: "Delmax", image: "/images/all6.jpg", price: "$120", desc:"ROCKBLADE 145R12C 86/84Q ROCK 818" },
      { id: 7, name: "Annaite", image: "/images/all7.jpg", price: "$150",desc:"ROCKBLADE 31X10.50R15LT 109Q ROCK 757 M/T" },
      { id: 8, name: "Delmax", image: "/images/all8.jpg", price: "$100",desc:"185/75R16C 8PR 104/102R NOV269" },
      { id: 9, name: "Hankook", image: "/images/all9.jpg", price: "$130",desc:"195/75R16C 110/108Q 857 ***LIGHT TRUCK*** (VIET) " },
      
    ],
    "passenger": [
      { id: 1, name: " Annaite", image: "/images/pass1.jpg", price: "$80",desc:"165/60R14 75H NOV412" },
      { id: 2, name: "Delmax", image: "/images/pass2.jpg", price: "$90" ,desc:"155/80R13 79T NOV125"},
    ],
  };


  const [selectedTyreType, setSelectedTyreType] = useState("all-terrain");
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
          {tyreTypes.map((tyre) => (
            <li
              key={tyre.id}
              className={`cursor-pointer py-1 px-4 rounded-lg  ${selectedTyreType === tyre.id ? "bg-blue-500" : "hover:bg-gray-700"}`}
              onClick={() => setSelectedTyreType(tyre.id)}
            >
              {tyre.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 px-4">
        <h2 className="text-3xl font-bold p-4 text-center">
          {tyreTypes.find((tyre) => tyre.id === selectedTyreType)?.name}
        </h2>
        {tyreData[selectedTyreType].length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tyreData[selectedTyreType].map((tyre) => (
              <div key={tyre.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition flex flex-col h-full">
                <img src={tyre.image} alt={tyre.name} className="w-full h-40 object-contain rounded-lg" />
                <h3 className="text-lg font-medium mt-4">{tyre.name}</h3>
                <p className="text-black mt-2 text-sm">{tyre.desc}</p>
                <p className="text-gray-500 font-semibold text-lg mt-2">{tyre.price}</p>
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

export default TyrePage;
