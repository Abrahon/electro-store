import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Review = () => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviews, setReviews] = useState([]);
  const {_id} = useParams();
  console.log(_id)
  // const [comments, setComments] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;

    const newReview = { review, rating };
    console.log(newReview);

    if (review.trim() === '' || rating === 0) {
      alert('Please provide both a review and a rating.');
      return;
    }
    fetch("http://localhost:5000/reviews", {
      method: "POST", // Correct the typo here
      headers: {
        "Content-Type": "application/json", // Properly set headers for JSON
      },
      body: JSON.stringify(newReview), // Use the product object correctly
    })
    .then(res=>res.json())
     .then((data) => {
              console.log("Server response:", data);
              if (data.insertedId) {
                // Check if the server confirms the product was added
                Swal.fire({
                  title: "Review added successfully!",
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

    
    // setReviews([...reviews, newReview]);

    setReview('');
    setRating(0);
  };
  // get data from mongodb 
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch reviews');
        }
        return res.json();
      })
      .then((data) => setReviews(data))
      .catch((error) => {
        console.error('Error fetching reviews:', error);
        alert('An error occurred while fetching reviews. Please try again later.');
      });
  }, []);

  // Delete review form databse
  const handleDelete = async (id) => {
    if (!id) {
      console.error("Invalid ID: The ID is undefined or null.");
      Swal.fire("Error!", "Unable to delete: Invalid ID.", "error");
      return;
    }
    console.log("Attempting to delete coffee with ID:", id);
    // Show confirmation alert
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  
    if (result.isConfirmed) {
      try {
        // Perform the delete request
        const response = await fetch(`http://localhost:5000/reviews/${id}`, {
          method: "DELETE",
        });
  
        if (response.ok) {
          const data = await response.json();
  
          if (data.deletedCount > 0) {
            // Update the state to remove the deleted item
            setReviews((prevReviews) =>
              prevReviews.filter((review) => review._id !== id)
            );
  
            Swal.fire("Deleted!", "The coffee has been deleted.", "success");
          } else {
            Swal.fire("Error!", "Could not delete the coffee.", "error");
          }
        } else {
          Swal.fire(
            "Error!",
            `Failed to delete coffee: ${response.statusText}`,
            "error"
          );
        }
      } catch (error) {
        Swal.fire("Error!", "Something went wrong while deleting.", "error");
        console.error("Error deleting coffee:", error);
      }
    }
  };
  
  return (
    <div>
      <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Submit Your Review</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Your Review</label>
            <textarea
              name="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Write your review here..."
              rows="5"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Your Rating</label>
            <div className="flex space-x-1">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={`w-8 h-8 focus:outline-none ${
                      index <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.146 6.564a1 1 0 00.95.69h6.908c.969 0 1.371 1.24.588 1.81l-5.588 4.066a1 1 0 00-.364 1.118l2.146 6.564c.3.921-.755 1.688-1.539 1.118l-5.588-4.066a1 1 0 00-1.175 0l-5.588 4.066c-.784.57-1.839-.197-1.539-1.118l2.146-6.564a1 1 0 00-.364-1.118L.553 12.991c-.784-.57-.38-1.81.588-1.81h6.908a1 1 0 00.95-.69l2.146-6.564z"
                      />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet. Be the first to review!</p>
        ) : (
          <ul>
          {reviews.map((rev, index) => (
            <li key={rev._id} className="mb-4 border-b pb-4">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((star, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={starIndex < rev.rating ? 'currentColor' : 'none'}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke={starIndex < rev.rating ? 'yellow' : 'currentColor'}
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.146 6.564a1 1 0 00.95.69h6.908c.969 0 1.371 1.24.588 1.81l-5.588 4.066a1 1 0 00-.364 1.118l2.146 6.564c.3.921-.755 1.688-1.539 1.118l-5.588-4.066a1 1 0 00-1.175 0l-5.588 4.066c-.784.57-1.839-.197-1.539-1.118l2.146-6.564a1 1 0 00-.364-1.118L.553 12.991c-.784-.57-.38-1.81.588-1.81h6.908a1 1 0 00.95-.69l2.146-6.564z"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">{rev.review}</p>
              <div>
                <button
                  onClick={() => handleDelete(rev._id)}
                  className="bg-red-600 mx-4 my-2 px-6 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        
        )}
      </div>
    </div>
  );
};

export default Review;
