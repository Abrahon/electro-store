import { useState } from "react";
import ReviewTable from "./ReviewTable";
// import { comment } from "postcss";

const ReviewForm = () => {
    const[reviews,setReviews] = useState([]);
    console.log(reviews);
    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const comment = form.comment.value;
        
        const newReview = ({name, comment})
        setReviews(newReview);
        console.log(newReview);
        
    }
    return (
        <div className="w-full">
            <form onSubmit={handleReview} className="w-1/2">
            <input className=" w-1/2 px-2 py-2 rounded-lg my-4" type="text" name="name"  placeholder="Enter your name" value={reviews.name}  required/><br></br>
            <textarea className="w-1/2 px-2" name="comment" id="" cols="40" rows="5" placeholder="write your comment" value={reviews.comment} required></textarea><br></br>
            <input className="btn btn-primary rounded-lg " type="submit" value="submit review" />
            </form>
            <div className="">
                {
                    reviews.map(review=><ReviewTable
                    key={review.id}
                    review={review}
                    ></ReviewTable>)
                }
            </div>
            
            <ReviewTable></ReviewTable>
           
        
        </div>
    );
};

export default ReviewForm;