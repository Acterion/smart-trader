import React from 'react';
import {Button, ListGroup} from "react-bootstrap";

import cartModel from '~s/cart.js';
import order from "~s/order";
import router from '~s/router.js';

export default class extends React.Component{
    render(){
        return (
            <div>
                <h2>Congratulations!</h2>

                <h3>Your credentials:</h3>
                <ListGroup>
                    <ListGroup.Item><b>Name:</b> {order.formFields.name.value}</ListGroup.Item>
                    <ListGroup.Item><b>Surname:</b> {order.formFields.surname.value}</ListGroup.Item>
                    <ListGroup.Item><b>E-mail:</b> {order.formFields.email.value}</ListGroup.Item>
                </ListGroup>
                <p><strong>Total: {cartModel.total}</strong></p>
                <hr/>
                <h3>Your order will be shipped in <strong>{Math.floor(Math.random() * 100)}</strong> days...</h3>
                <Button
                    variant="outline-warning"
                    onClick={() => {router.moveTo('cart')}}
                >
                    Go back to cart
                </Button>
            </div>
        )
    }
}