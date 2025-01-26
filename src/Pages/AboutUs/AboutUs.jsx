import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8 !bg-black ">
      <div className="text-center bg-blue-100 p-12 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Electro Store</h1>
        <p className="text-lg text-gray-600">Your one-stop shop for the latest and greatest in electronics.</p>
      </div>

      <div className="mt-12 space-y-10 ">
        {/* Our Mission */}
        <section className="bg-white p-8 rounded-lg shadow-md ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At Electro Store, our mission is to provide cutting-edge electronics at competitive prices while ensuring a seamless shopping experience. We aim to bring you the latest technology products, from smartphones to smart home gadgets, all in one place.
          </p>
        </section>

        {/* Our Vision */}
        <section className="bg-white p-8 rounded-lg shadow-md ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            We envision a future where technology enhances lives. By offering the most advanced and innovative products, we aim to empower our customers with tools that help them thrive in this digital age.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Wide selection of the latest electronics</li>
            <li>Fast and secure delivery</li>
            <li>24/7 customer support</li>
            <li>Competitive pricing</li>
            <li>Hassle-free returns and exchanges</li>
          </ul>
        </section>
      </div>

      {/* Footer Section */}
      <div className="mt-16 bg-blue-600 text-white p-10 rounded-lg shadow-md text-center">
        <h3 className="text-3xl font-semibold mb-4">Join the Electro Store Community!</h3>
        <p className="text-lg">Stay updated with the latest trends in technology and be the first to know about our exclusive deals.</p>
      </div>
    </div>
  );
};

export default About;
