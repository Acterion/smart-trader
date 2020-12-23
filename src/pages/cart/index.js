import React from 'react';
import Counter from '~c/input/counter';
// import styles from './app.module.css';
// import {Button} from "react-bootstrap";

import cartModel from '~s/cart.js';
import router from '~s/router.js';

import {observer} from 'mobx-react';

@observer class Cart extends React.Component{
    render(){
        let productsRows = cartModel.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <Counter
                            min={1}
                            max={product.rest}
                            cnt={product.current}
                            onChange={(cnt) => cartModel.change(i, cnt)}
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td>
                        <button className="btn btn-outline-danger"
                                onClick={() => cartModel.remove(i)}>
                            X
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <h2>Cart</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Count</td>
                        <td>Total</td>
                        <td>Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                    {productsRows}
                    </tbody>
                </table>
                <h3>Total: {cartModel.total}</h3>
                <hr/>
                <button className="btn btn-primary" onClick={() => router.moveTo('order')}>
                    Send
                </button>
            </div>
        );
    }
}
export default Cart;