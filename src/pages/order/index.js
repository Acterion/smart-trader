import {Button, Modal, Form} from "react-bootstrap";
import React from "react";
import {observer} from "mobx-react";

import cartModel from '~s/cart.js';
import formModel from '~s/order.js';
import router from '~s/router.js';

@observer class Order extends React.Component {
    state = {
        showSum: false
    }

    showSum() {
        this.setState({...this.state, showSum: true});
    }

    hideSum() {
        this.setState({...this.state, showSum: false});
    }

    sumModal(){
        let fields = [];
        for (let name in formModel.formFields){
            let field = formModel.formFields[name];
            fields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                        type="text"
                        value={field.value}
                        placeholder={field.placeholder}
                        onChange={(e) => formModel.change(name, e.target.value)}
                    />
                </Form.Group>
            )
        }

        return (
            <Modal show={this.state.showSum} onHide={() => {
                this.hideSum()
            }} size="lg">
                <Modal.Header closeButton>Your order</Modal.Header>
                <Modal.Body>
                    {fields}
                    <hr/>
                    <strong>Your current total: {cartModel.total}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        router.moveTo('result');
                    }}>Confirm order</Button>
                    <Button variant="outline-secondary" onClick={() => {
                        this.hideSum()
                    }}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    render(){
        return (
            <div>
                <h2>Order</h2>
                <Button onClick={() => this.showSum()}>Show summary</Button>
                {this.sumModal()}
            </div>
        )
    }
}

export default Order;