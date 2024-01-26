import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/home1.jpg.webp'
import img2 from '../../../assets/home2.jpg.webp'
import img3 from '../../../assets/home3.jpg.webp'
import img4 from '../../../assets/home4.jpg.webp'
import img5 from '../../../assets/home5.jpg.webp'




const Banner = () => {
    return (
        <Carousel >
       
        <div>
             <img src={img1} />
             
         </div>
         <div>
             <img src={img2} />
             
         </div>
         <div>
             <img src={img3} />
             
         </div>
         <div>
             <img src={img4} />
             
         </div>
         <div>
             <img src={img5} />
             
         </div>
       
       
     </Carousel>
    );
};

export default Banner;
