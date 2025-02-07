import React from "react";
import Image from "next/image";
export default function Shop() {
    return (
      <div className="max-w-6xl mx-auto py-12 px-6">
      
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Explore Our Special Dishes
        </h1>
  

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          <div className="bg-white p-4 rounded-lg shadow-lg text-center">

            <Image
              src="/dish-1.png/" 
              alt="Dish 1" 
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Grand Italiano</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur elit.</p>
            <p className="text-lg font-bold text-green-600 mt-2">$12.99</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <Image
              src="/dish-2.png/" 
              alt="Dish 2" 
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Chocolate Truffle Cake
            With Honey Flavor</h2>
            <p className="text-gray-600"> Non mi sed etiam a id at ultricies neque.</p>
            <p className="text-lg font-bold text-green-600 mt-2">$14.99</p>
          </div>
 
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <Image
              src="/dish-3.png/" 
              alt="Dish 3" 
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Cappuccino</h2>
            <p className="text-gray-600">Short description of the dish.</p>
            <p className="text-lg font-bold text-green-600 mt-2">$9.99</p>
          </div>
  

          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <Image
              src="/dish-4.png/" 
              alt="Dish 4" 
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Communal Feast Spanish Food</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amit.</p>
            <p className="text-lg font-bold text-green-600 mt-2">$11.49</p>
          </div>
 
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <Image
              src="/dish-5.png/" 
              alt="Dish 5" 
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">Traditional Soft Pretzels
            with Sweet Beer Cheese</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amit.</p>
            <p className="text-lg font-bold text-green-600 mt-2">$13.99</p>
          </div>
        </div>
  
        <h2 className="text-3xl font-bold text-center text-gray-800 mt-12 mb-6">
          OUR STAFF
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
     
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <Image 
              src="/side-owner.png/" 
              alt="" 
              className="w-16 h-16 mx-auto rounded-full"
            />
            <p className="text-gray-600 italic mt-4">
            &quot;Proud to be part of a team that values quality and customer satisfaction!&quot;


            </p>
            <h3 className="text-lg font-semibold mt-2">John Doe</h3>
          </div>
  
      
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <Image
              src="/chef-3.jpg/" 
              alt="Customer 2" 
              className="w-16 h-16 mx-auto rounded-full"
            />
            <p className="text-gray-600 italic mt-4">
            &quot;Every day is an opportunity to create amazing experiences for our guests!&quot;

            </p>
            <h3 className="text-lg font-semibold mt-2">Sarah Smith</h3>
          </div>
  
        
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <Image 
              src="/chef-2.jpg/" 
              alt="" 
              className="w-16 h-16 mx-auto rounded-full"
            />
            <p className="text-gray-600 italic mt-4">
            &quot;I love working here—great food, great people, and an even better atmosphere!&quot;

            </p>
            <h3 className="text-lg font-semibold mt-2">Michael Brown</h3>
          </div>
        </div>
      </div>
    );
  }
  