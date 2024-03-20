
import { useLoaderData } from 'react-router-dom';
import Productcart from '../Productcart/Productcart';

const Product = () => {
    const {products} = useLoaderData();

    return (
        <div>
            <div className='grid p-4 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center'>
                
                {products.map((product,id)=> <Productcart key={id} product={product}></Productcart>)}   
            </div>
        </div>
    );
};

export default Product;