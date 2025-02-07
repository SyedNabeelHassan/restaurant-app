import Image from 'next/image';
import Link from 'next/link';
import React from "react";

export default function LandingPage() {
  return (
    <div className="w-full bg-white ">
     
     <div
    className="relative w-full h-[40vh] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/bg-header.png')]"
  >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Our Shop</h1>
      <div>

  <ul className="space-y-2 text-sm text-white flex justify-between items-center ">
    <li><Link className="hover:text-orange-400" href="/">Home</Link></li>
    <li><Link className="hover:text-orange-400" href="/shop">Shop</Link></li>
  
  </ul>
</div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-12 px-6">
  <div>
    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Message from the Chef</h2>
    <p className="text-gray-600 leading-relaxed">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, rem aut, pariatur ipsa esse delectus 
      error alias reprehenderit quis nisi ab, eligendi at quasi! Iusto accusantium nulla est dignissimos. Eius.
    </p>
  </div>
  
  <div className="relative flex justify-center">
    <Image
      src="/chef-card.png"
      width={350}
      height={420}
      alt="Chef D. Estwood"
      className="rounded-lg shadow-lg"
    />
    
  </div>
</div>

      <div className="max-w-screen-xl mx-auto py-16 px-5">
  <h2 className="text-3xl font-semibold text-green-800 text-center mb-8">What Our Customers Are Saying</h2>
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="p-6 bg-white rounded-lg shadow-lg flex items-start">
      <Image src="/Ellipse-30.png" width={50} height={50} alt="Reviewer 1" className="rounded-full" />
      <div className="ml-4">
        <p className="font-semibold text-lg">Md. Arafat Hossion</p>
        <p className="text-sm text-gray-400">Chef, London</p>
        <p className="text-sm mt-2">&quot;Amazing food and great ambiance. Will definitely visit again!&quot;</p>
      </div>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg flex items-start">
      <Image src="/Ellipse-40.png" width={50} height={50} alt="Reviewer 2" className="rounded-full" />
      <div className="ml-4">
        <p className="font-semibold text-lg">Md. Mokbul Hossion</p>
        <p className="text-sm text-gray-400">Chef, London</p>
        <p className="text-sm mt-2">&quot;The best organic food I&#39;ve ever had. Highly recommended!&quot;</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
