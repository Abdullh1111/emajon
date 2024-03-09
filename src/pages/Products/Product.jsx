import React from 'react';
import { Outlet } from 'react-router-dom';

const Product = () => {
    return (
        <div>
            <p>this is products</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Product;