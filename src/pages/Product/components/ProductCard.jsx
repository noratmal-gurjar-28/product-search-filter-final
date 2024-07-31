import { useNavigate } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };
    
    return (
        <div className="col-xl-3 col-lg-3 col-md-6 col-12 p-2 product-hover" onClick={handleClick}>
            <img
                src={product.urls.thumb}
                className="img-card"
                alt={product.alt_description}
            />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{product.alt_description}</h5>
                    <div className="row text-center">
                        <div className="col-6">
                            <p><AiOutlineLike size={27} className="text-success text-capitalize  p-1" />{product.likes} Likes</p>
                        </div>
                        <div className="col-6">
                            <p className="text-capitalize">{product.user.name}</p>
                        </div>
                    </div>
                    <button className="bck-btn-list mx-auto">Read More</button>
                </div>
            </div>
        </div>
    );
};
export default ProductCard;
