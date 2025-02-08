import Link from 'next/link';
import Image from 'next/image';
import React from "react";

export default function Footbar() {
  return (
    <div className="w-full bg-black text-white py-4 mt-auto">

      <div className=" text-center mb-10">
        <h2 className="text-2xl font-semibold text-orange-500">Still</h2>
        <h3 className="text-xl">You Need Our Support?</h3>
        <p className="text-gray-400 text-sm mt-2">
          Don&#39;t wait, make a smart & logical quote here. It&#39;s pretty easy.
        </p>
        <div className="mt-10 flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 rounded-l-md text-black text-sm w-64 focus:outline-none"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">

        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm text-gray-400">
            Corporate clients and leisure travelers have been relying on GroundLink for dependable, safe, and
            professional chauffeur car service in major cities across the world.
          </p>

          <div className="mt-4">
            <p className="font-semibold">Opening Hours</p>
            <p className="text-sm text-gray-400">Mon - Sat: 8:00 - 6:00</p>
            <p className="text-sm text-gray-400">Sunday - Closed</p>
          </div>

        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/partners">Partners</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
  
        <div>
          <h2 className="text-lg font-semibold mb-4">Help?</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/reporting">Reporting</Link></li>
            <li><Link href="/support-policy">Support Policy</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center">
              <Image src="/food-image01.png" width={50} height={50} alt="Post 1" className="rounded-md" />
              <div className="ml-3">
                <p>Is fast food good for your body?</p>
                <p className="text-xs text-gray-500">February 28, 2022</p>
              </div>
            </li>
            <li className="flex items-center">
              <Image src="/food-image01.png" width={50} height={50} alt="Post 2" className="rounded-md" />
              <div className="ml-3">
                <p>Change your food habit with organic food</p>
                <p className="text-xs text-gray-500">February 28, 2022</p>
              </div>
            </li>
            <li className="flex items-center">
              <Image src="/food-image01.png" width={50} height={50} alt="Post 3" className="rounded-md" />
              <div className="ml-3">
                <p>Do you like fast food for your life?</p>
                <p className="text-xs text-gray-500">February 28, 2022</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-2 mt-8 border-t border-gray-700">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-5">
          <p className="text-sm text-gray-400">&copy; 2022 by Ayeman. All Rights Reserved.</p>
          <div className="flex gap-2">
            <a href="#"><Image src="/icon-facebook.png" alt="Facebook" width={24} height={24} className="w-5 h-5" /></a>
            <a href="#"><Image src="/icon-twitter.png" alt="Twitter" width={24} height={24} className="w-5 h-5" /></a>
            <a href="#"><Image src="/icon-instagram.png" alt="Instagram" width={24} height={24} className="w-5 h-5" /></a>
            <a href="#"><Image src="/icon-youtube.png" alt="YouTube" width={24} height={24} className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

    </div>
  );
}
