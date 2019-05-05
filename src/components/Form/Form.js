import React from 'react';
import Products from "../Products/Products";
import InputField from "./InputField/InputField";

import './Form.css';

const Form = ({products,add,del,value,cost,price,changeN,changeC}) => {
    return (
        <div className="Form">
            <InputField
                value={value}
                cost={cost}
                add={()=>add()}
                changeN={(e)=>changeN(e)}
                changeC={(e)=>changeC(e)}
            />
            <Products
                products={products}
                click={del}
            />
            <p>Total spent: {price} KGS</p>
        </div>
    );
};

export default Form;