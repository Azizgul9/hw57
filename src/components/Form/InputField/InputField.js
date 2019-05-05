import React from 'react';

const InputField = ({value,cost,add,changeN,changeC}) => {
    return (
        <div>
            <input type="text" value={value} onChange={changeN}/>
            cost: <input type="text" value={cost} onChange={changeC}/>
            <button onClick={add}>add</button>
        </div>
    );
};

export default InputField;