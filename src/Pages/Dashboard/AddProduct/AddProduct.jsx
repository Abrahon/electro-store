import React from "react";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const imageFile = form.image.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    // Declare addNewProduct here
    let addNewProduct;

    try {
      // Upload the image to ImageBB
      const imageResponse = await fetch(image_hosting_api, {
        method: "POST",
        body: formData,
      });

      const imageData = await imageResponse.json();

      if (imageData.success) {
        const imageUrl = imageData.data.url; // Get the hosted image URL

        // Assign value to addNewProduct
        addNewProduct = { name, category, price, description, image: imageUrl };

        console.log("New Product:", addNewProduct);
       
        form.reset(); // Reset the form
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error.message);
      alert("Failed to upload image. Please try again.");
      return; // Exit if image upload fails
    }

    // Use addNewProduct in the fetch request
    fetch("http://localhost:5000/product", {
        method: "POST", // Correct the typo here
        headers: {
          "Content-Type": "application/json", // Properly set headers for JSON
        },
        body: JSON.stringify(addNewProduct), // Use the product object correctly
      })
        .then((response) => response.json()) // Convert server response to JSON
        .then((data) => {
          console.log("Server response:", data);
          if (data.insertedId) {
            // Check if the server confirms the product was added
            Swal.fire({
              title: "Product added successfully!",
              text: "You clicked the button!",
              icon: "success",
            });
            form.reset(); // Reset the form after successful submission
          } else {
            alert("Failed to add product.");
          }
        })
        .catch((error) => {
          console.error("Error adding product:", error);
          Swal.fire({
            icon: "error",
            title: "An error occurred. Please try again",
            text: "Something went wrong!",
          });
        });
      
  }; 

  return (
    <div className="max-w-md mx-auto w-full mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Product Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter product name"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Product Category */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Product Category*
          </label>
          <select
            id="category"
            name="category"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="TV">TV</option>
            <option value="Laptop">Laptop</option>
            <option value="Watch">Watch</option>
            <option value="Phone">Phone</option>
            <option value="Tablet">Camera</option>
            <option value="Tablet">Headphone</option>
            
          </select>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price*
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter the price"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Write something"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            required
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
