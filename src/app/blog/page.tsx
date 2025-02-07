import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Welcome to Our Blog</h1>
      

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
            <Link href="/recipes/espresso" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg">Learn More</Link>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <Image src="/cappuccino.jpg" alt="Cappuccino" width={300} height={200} className="rounded-md mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Creamy Cappuccino</h3>

            <p className="text-gray-600">Smooth, frothy, and perfect for coffee lovers.</p>

            <Link href="/recipes/cappuccino" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg">Learn More</Link>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <Image src="/iced-coffee.jpg" alt="Iced Coffee" width={300} height={200} className="rounded-md mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Refreshing Iced Coffee</h3>

            <p className="text-gray-600">Perfectly chilled coffee for hot days.</p>
            <Link href="/recipes/iced-coffee" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg">Learn More</Link>
          </div>
        </div>

      </section>
    </div>
  );
}
