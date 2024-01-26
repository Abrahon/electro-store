
const ProductCard = ({product}) => {
    const{name,category,image,price} = product;
    return (
        <div className="shadow-2xl p-2">
            <div>
                <img src={image} alt="image" />
                <div>
                    <h1>{name}</h1>
                    <p>{category}</p>
                    <p>{price}</p>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;