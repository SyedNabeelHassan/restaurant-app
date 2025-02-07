import Image from 'next/image';
import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-center">
      
      <div className="mb-8">
        <Image 
          src="/restaurant.jpg" 
          alt="Our Restaurant" 
          width={800} 
          height={400} 
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
      
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Restaurant</h1>
      
      <p className="text-lg text-gray-600 mb-6">
        Welcome to our restaurant! We are dedicated to serving fresh, high-quality food with exceptional service.
        Whether you&#39;re looking for a morning coffee, lunch, or a late-night snack, we&#39;re here for you 24/7.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Opening Hours</h2>
        <p className="text-lg"><strong>Monday - Friday:</strong> 8:00 AM - 11:00 PM</p>
        <p className="text-lg"><strong>Saturday - Sunday:</strong> 9:00 AM - 12:00 AM</p>

        <p className="text-lg mt-2 text-green-600 font-semibold">We are open 24/7 for online orders!</p>
      </div>
    </div>
  );
}
