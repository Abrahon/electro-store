import React, { useState } from "react";

const BillingOrderForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "United States (US)",
    address: "",
    address2: "",
    city: "",
    state: "Maryland",
    zipCode: "",
    phone: "",
    email: "",
    paymentMethod: "bank",
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <form
        className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Billing Details Section */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-6 border-b pb-2 text-gray-700">
              Billing details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-gray-600">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-600">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-2 text-gray-600">
                  Company Name (optional)
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-600">
                  Country / Region *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option>United States (US)</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-gray-600">State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-600">Town / City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-600">ZIP Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-600">Phone *</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-2 text-gray-600">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-lg font-semibold mb-6 border-b pb-2 text-gray-700">
              Your order
            </h2>
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 mb-4">
              <p className="mb-2">
                <span className="font-semibold">Product:</span> Tablet Red
                EliteBook Revolve 810 G2 × 2
              </p>
              <p className="mb-2">
                <span className="font-semibold">Subtotal:</span> $4,200.00
              </p>
              <p className="mb-2">
                <span className="font-semibold">Shipping:</span> $50.00
              </p>
              <p className="font-semibold mt-4">Total: $4,250.00</p>
            </div>

            <div className="mb-4">
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={formData.paymentMethod === "bank"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Direct Bank Transfer
              </label>
              <p className="text-gray-500 text-sm mb-4">
                Make your payment directly into our bank account. Your order
                will not be shipped until the funds have cleared in our account.
              </p>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={formData.paymentMethod === "credit"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Credit Card (Stripe)
              </label>
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label className="text-sm">
                I have read and agree to the website{" "}
                <a href="#" className="text-yellow-500 underline">
                  terms and conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-semibold p-3 rounded hover:bg-yellow-600"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillingOrderForm;
