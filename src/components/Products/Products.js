import React from 'react';

import './Product.css';

const Products = ({products,click}) => (
    products.map((product,index)=>(
        <p key={product+index}>
            <span className="productName">{product.name}</span>
            <span>{product.cost}</span>
            <button onClick={()=>click(index)}>x</button>
        </p>
    ))
);

export default Products;