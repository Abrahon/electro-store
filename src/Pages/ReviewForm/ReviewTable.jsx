// import React from 'react';

// import { useState } from "react";

const ReviewTable = ({review}) => {
    // const[myReviews, setMyReviews] = useState([])
    const{name, comment} = review;

    return (
        <div>
        <h2>Reviews</h2>
        <table>
          <thead>
            <tr>
              <th>{name}</th>
              <th>{comment}</th>
            </tr>
          </thead>
          <tbody>
         
            
          </tbody>
        </table>
      </div>
    );
};

export default ReviewTable;