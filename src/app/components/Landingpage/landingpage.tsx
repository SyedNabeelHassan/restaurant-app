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
</div> <div className="max-w-6xl mx-auto py-12 px-6">




<section className="text-center mb-12">
  <h2 className="text-3xl font-semibold text-gray-700">Who We Are</h2>
  <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
    We are a passionate team dedicated to serving delicious meals 24/7. From fresh ingredients to
    high-quality coffee, we ensure every bite is delightful.
  </p>
</section>


<section className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="bg-white p-6 rounded-lg text-center">
    <Image src="/24hr-service.png" alt="24 Hour Service" width={270} height={78} className="rounded-md mx-auto" />
    <h3 className="text-xl font-semibold mt-4">24/7 Service</h3>
    <p className="text-gray-600">We are open round the clock to serve you delicious meals anytime.</p>
  </div>
  
  <div className="bg-white p-6 rounded-lg text-center">
    <Image src="/fresh-food.png" alt="Fresh Food" width={260} height={78} className="rounded-md mx-auto" />
    <h3 className="text-xl font-semibold mt-4">Fresh Ingredients</h3>
    <p className="text-gray-600">We use only the freshest ingredients to create delicious meals.</p>
  </div>

  <div className="bg-white p-6 rounded-lg  text-center">
    <Image src="/high-quality-coffee.png" alt="High Quality Coffee" width={300} height={200} className="rounded-md mx-auto" />
    <h3 className="text-xl font-semibold mt-4">High-Quality Coffee</h3>
    <p className="text-gray-600">Enjoy the finest coffee blends, brewed to perfection.</p>
  </div>
</section>


<section className="mt-12">

  <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Our Coffee Recipes</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">


      <Image src="/espresso.png" alt="Espresso" width={300} height={200} className="rounded-md mx-auto" />

      <h3 className="text-xl font-semibold mt-4">Classic Espresso</h3>
      <p className="text-gray-600">A perfect shot of rich and smooth espresso.</p>
      <Link href="/blog" className="mt-4 inline-block bg-orange-400 text-white px-4 py-2 rounded-lg">Learn More</Link>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <Image src="/cappuccino.jpg" alt="Cappuccino" width={300} height={200} className="rounded-md mx-auto" />
      <h3 className="text-xl font-semibold mt-4">Creamy Cappuccino</h3>

      <p className="text-gray-600">Smooth, frothy, and perfect for coffee lovers.</p>

      <Link href="/blog" className="mt-4 inline-block bg-orange-400 text-white px-4 py-2 rounded-lg">Learn More</Link>
    </div>
    
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <Image src="/iced-coffee.jpg" alt="Iced Coffee" width={300} height={200} className="rounded-md mx-auto" />
      <h3 className="text-xl font-semibold mt-4">Refreshing Iced Coffee</h3>

      <p className="text-gray-600">Perfectly chilled coffee for hot days.</p>
      <Link href="/blog" className="mt-4 inline-block bg-orange-400 text-white px-4 py-2 rounded-lg">Learn More</Link>
    </div>
  </div>

</section>
</div>

      <div className="max-w-screen-xl mx-auto py-16 px-5">
  <h2 className="text-3xl font-semibold text-orange-400 text-center mb-8">What Our Customers Are Saying</h2>
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
