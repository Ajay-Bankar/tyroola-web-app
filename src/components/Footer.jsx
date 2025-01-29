import React from 'react';

const Footer = () => {
  const locations = [
    {
      name: "Springvale",
      tel: "(03) 9562 4269",
      email: "springvale@novatyres.com.au",
      address: "4/134 Springvale Rd, Springvale 3171, VIC"
    },
    {
      name: "Dandenong",
      tel: "(03) 9793 7788",
      email: "dandenong@novatyres.com.au",
      address: "145 Princes Highway, Dandenong 3175, VIC"
    },
    {
      name: "Hallam",
      tel: "(03) 9796 3222",
      email: "hallam@novatyres.com.au",
      address: "82 Hallam South Rd, Hallam 3803, VIC"
    },
    {
      name: "Bayswater",
      tel: "(03) 9729 8877",
      email: "bayswater@novatyres.com.au",
      address: "466 Dorset Rd, Bayswater 3153, VIC"
    },
    {
      name: "Ferntree Gully",
      tel: "(03) 9758 5888",
      email: "ftgully@novatyres.com.au",
      address: "1080 Burwood Hwy, Ferntree Gully 3156, VIC"
    },
    {
      name: "Craigieburn",
      tel: "(03) 9308 1177",
      email: "craigieburn@novatyres.com.au",
      address: "2/127 Craigieburn Rd, Craigieburn 3064, VIC"
    },
    {
      name: "Thomastown",
      tel: "(03) 9466 4688",
      email: "thomastown@novatyres.com.au",
      address: "63 Settlement Rd, Thomastown 3074, VIC"
    },
    {
      name: "Sunshine",
      tel: "(03) 9312 3666",
      email: "sunshine@novatyres.com.au",
      address: "196 McIntyre Rd, Sunshine North 3020, VIC"
    },
    {
      name: "Werribee",
      tel: "(03) 9741 1511",
      email: "werribee@novatyres.com.au",
      address: "37-43 Heaths Rd, Werribee 3030, VIC"
    }
  ];

  const links = [
    "About",
    "Contact",
    "Warranty",
    "Privacy Policy",
    "zipPay"
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12">
      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-4">
          {locations.map((location, index) => (
            <div key={index} className="border border-gray-700 rounded-lg p-6 px-4 hover:border-orange-500 transition">
              <h3 className="text-xl font-bold mb-4">{location.name}</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">TEL:</span>
                  <a href={`tel:${location.tel}`} className="hover:text-orange-500">{location.tel}</a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">EMAIL:</span>
                  <a href={`mailto:${location.email}`} className="hover:text-orange-500 break-all">{location.email}</a>
                </p>
                <p className="mt-2">{location.address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-6  bg-green-800">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 ">
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-orange-500 transition"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">ABN: 70 622 497 241</p>
            <p>Copyright 2025 © <strong className="text-white">NOVA TYRES PTY LTD</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;