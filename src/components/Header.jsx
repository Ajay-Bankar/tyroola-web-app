import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  const [count, setCount] = useState('0');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Tyres', path: '/tyres' },
    { label: 'Wheels', path: '/wheels' },
    { label: 'Service/Repairs', path: '/servicerepairs' },
    
   
  ];

  return (
    <>
      {isSmallScreen ? (
        // Mobile Header
        <div className='flex justify-between items-center px-4 fixed top-0 w-full h-[80px] bg-green-900 z-50 shadow-md'>
          <button onClick={() => setIsSidebarOpen(true)} className='absolute left-4'>
            <IoIosMenu size={30} color='#e9ecef' />
          </button>
          
          <div className='w-full flex justify-center'>
            <img 
              className='w-[150px]  object-cover' 
              src="../images/nova-logo.png" 
              alt="Nova Logo" 
            />
          </div>
          
          <div className='absolute right-4 '>
            <IoCartOutline size={30} color='#e9ecef' />
            <div className='absolute -top-2 -right-2 flex justify-center items-center bg-yellow-500 text-white rounded-full w-5 h-5 border border-black text-xs'>
              {count}
            </div>
          </div>

          {/* Mobile Sidebar */}
          {isSidebarOpen && (
            <div 
              className='fixed inset-0 bg-black bg-opacity-50 z-[100]' 
              onClick={() => setIsSidebarOpen(false)}
            >
              <div 
                className='fixed top-0 left-0 w-[80%] h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out'
                onClick={(e) => e.stopPropagation()}
              >
                <div className='flex justify-between bg-green-900 items-center p-4 border-b'>
                  <img 
                    className='w-[120px] h-[32px] object-cover' 
                    src="../images/nova-logo.png" 
                    alt="Nova Logo" 
                  />
                  <button onClick={() => setIsSidebarOpen(false)}>
                    <IoIosClose size={30} color='#e9ecef'  />
                  </button>
                </div>
                
                <nav className='p-4'>
                  {menuItems.map((item, index) => (
                    <Link 
                      key={index} 
                      to={item.path} 
                      className='block py-3 border-b hover:bg-gray-100'
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      ) : (
        // Desktop Header
        <div className='flex justify-between items-center px-8 fixed top-0 w-full h-[80px] bg-green-900 z-50 shadow-md'>
          <div className='w-full flex justify-center gap-8 items-center'>
            <div>
              <Link to='/'>
                <img 
                  className=' object-cover' 
                  src="../images/nova-logo.png" 
                  alt="Nova Logo" 
                />
              </Link>
            </div>
            {menuItems.slice(0, 4).map((item, index) => (
      <div key={index} className='flex justify-center items-center gap-2'>
        <Link className=' text-gray-200 font-semibold text-[1rem]' to={item.path}>
          {item.label}
        </Link>
        {item.label !== 'Home' && (
          <p><IoIosArrowDown color='#e9ecef' /></p>
        )}
      </div>
    ))}
          </div>
          
          <div className='w-full flex justify-end gap-8 items-center'>
            {menuItems.slice(4).map((item, index) => (
              <div key={index} className='flex justify-center items-center gap-2'>
                <p className='text-gray-200 font-semibold text-[1rem]'>{item.label}</p>
                <p><IoIosArrowDown color='#e9ecef' /></p>
              </div>
            ))}
            <div className='relative flex justify-center items-center gap-2'>
              <p><IoCartOutline size={30} color='#e9ecef' /></p>
              <div className='absolute -top-2 -right-2 flex justify-center items-center bg-yellow-500 text-white rounded-full w-6 h-6 border border-black'>
                {count}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;