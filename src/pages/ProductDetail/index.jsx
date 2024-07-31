import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; 
import { AiOutlineLike } from "react-icons/ai";

const ProductDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const product = useSelector((state) => state.products.items.find((item) => item.id === productId));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (product) {
            setLoading(false);
        }
    }, [product]);

    if (loading) {
        return <div className='h-100 d-flex align-items-center justify-content-center'>Loading...</div>;
    }

    return (
        <div className="product-details text-center col-md-6 col-12 mx-1">
            <h4 className='mb-4 pt-3 sub-heading'>Product Details</h4>
            <img className='details-image px-3' src={product.urls.full} alt={product.alt_description} />
            <h5 className='mt-3'>{product.alt_description}</h5>
            <div className='row mt-2 mx-5 text-center'>
                <div className='col-5 my-2'>
                    <p>{product.user.name}</p>
                </div>
                <div className='col-7 my-2'>
                    <p><AiOutlineLike size={27} className="text-success text-capitalize  p-1" />{product.likes} Likes</p>
                </div>
            </div>
            <button className='bck-btn' onClick={() => navigate(-1)}>Back to List</button>
        </div>
    );
};
export default ProductDetails;
