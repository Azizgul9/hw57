import React, {Component, Fragment} from 'react';
import Form from "../components/Form/Form";

class Task2 extends Component {
    state = {
        value:'',
        cost:0,
        products:[
            {name:'milk',cost: 4},
            {name:'apple',cost: 5},
            {name:'bread',cost: 10}
            ],
        totalPrice: 19
};
    addProduct=()=>{
        let newProduct={name:this.state.value,cost: this.state.cost};
        let products=[...this.state.products,newProduct];

        let costs=[];
        products.map(product=>(
            costs.push(parseInt(product.cost))
            )
        );
        let price=costs.reduce((sum,curVal)=>sum+curVal);
        console.log(price);

        this.setState({products,value:'',cost: 0,totalPrice:price});
    };

    removeProduct=(index)=>{
        let products=[...this.state.products];
        let product={...this.state.products[index]};
        products.splice(product,1);


        let oldCost=this.state.totalPrice;
        let price=oldCost-parseInt(product.cost);

        this.setState({products,totalPrice:price});
    };
    onChangeName=(event)=>{
        this.setState({value : event.target.value});
    };
    onChangeCost=(event)=>{
        this.setState({cost : event.target.value});
    };


    render(){
    return (
        <Fragment>
            <Form
                value={this.state.value}
                cost={this.state.cost}
                products={this.state.products}
                price={this.state.totalPrice}
                del={this.removeProduct}
                add={this.addProduct}
                changeN={this.onChangeName}
                changeC={this.onChangeCost}
            />
        </Fragment>
    );
}
}

export default Task2;