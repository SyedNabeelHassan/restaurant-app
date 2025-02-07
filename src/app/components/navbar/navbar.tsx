import Link from 'next/link';
import Image from 'next/image';
import React from "react";

export default function NavHead() {
  const icons = [
    { src: "/search.png", link: "#" },  // No link for search
    { src: "/user.png", link: "/login" },  // Link to Login page
    { src: "/shopping-cart.png", link: "#" }  // No link for cart yet
  ];
  return (
    <header className="w-full bg-black bg-black text-white">

      <div className="flex justify-between items-center py-6 px-8 border-b">
    
        <Image src="/Foodtuck.png" alt="Foodluck Logo" width={109} height={31} className="ml-6" />


        <nav>
      <ul className="items-center flex gap-6">
        {['Home', 'Menu', 'Blog', 'Pages', 'About', 'Shop', 'Contact'].map((item) => (
          <li key={item}>
            <Link href={item === 'Home' ? '/' : item === 'Menu' ? '/shop' : `/${item.toLowerCase()}`} 
                  className="hover:text-gray-400">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>


    <div className="flex items-center gap-4 px-4 mr-8">
      {icons.map((icon, index) => (
        <Link key={index} href={icon.link}>
          <button className="text-gray-700 hover:text-white">
            <Image src={icon.src} alt="Icon" width={24} height={24} />
          </button>
        </Link>
      ))}
    </div>
      </div>

    
      {/* <div>
        <Image src="/" alt="Header Background" width={1920} height={410} />
      </div> */}
    </header>
  );
}
