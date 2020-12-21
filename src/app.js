import React from 'react';
import Counter from './counter/counter.js';
import styles from './app.module.css';
import {Button, Modal} from "react-bootstrap";

export default class extends React.Component{
    state = {
        products: getProducts(),
        showSum: false
    }

    changeCnt(i, cnt) {
        let products = [...this.state.products];
        products[i] = {...products[i], current: cnt};
        this.setState({products});
    }

    deleteItem(i) {
        let newProducts = [...this.state.products];
        newProducts.splice(i, 1);
        this.setState({products: newProducts});
    }

    countTotal() {
        return this.state.products.reduce((acc, val) => acc + val.current * val.price, 0);
    }

    showSum() {
        this.setState({...this.state, showSum: true});
    }

    hideSum() {
        this.setState({...this.state, showSum: false});
    }

    sumModal() {
        return (
            <Modal show={this.state.showSum} onHide={() => {this.hideSum()}} size="lg">
                <Modal.Header>Your order</Modal.Header>
                <Modal.Body>
                    <div className="input-group mb-3">
                        <span className="input-group-text">First and last name</span>
                        <input type="text" aria-label="First name" className="form-control"/>
                        <input type="text" aria-label="Last name" className="form-control"/>
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="user" aria-label="Username"/>
                        <span className="input-group-text">@</span>
                        <input type="text" className="form-control" placeholder="mail.com" aria-label="Server"/>
                    </div>

                    <div className="float-right">
                        Order sum: <strong>{this.countTotal()}$</strong>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {this.hideSum()}}>Confirm order</Button>
                    <Button variant="outline-secondary" onClick={() => {this.hideSum()}}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    productRows() {
        return this.state.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td><Counter
                        min={1}
                        max={product.rest}
                        cnt={product.current}
                        onChange={(cnt) => this.changeCnt(i, cnt)}/>
                    </td>
                    <td>{product.price * product.current}</td>
                    <td className={styles.nb}><button className="btn btn-outline-danger" onClick={() => this.deleteItem(i)}>X</button></td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className={styles.root}>
                {this.sumModal()}
                <h2>Cart</h2>
                <table className="table table-hover table-borderless">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Number</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.productRows()}
                    </tbody>

                    <tfoot className="border-top">
                        <tr>
                            <td></td>
                            <td></td>
                            <td><strong className="float-right">Total:</strong></td>
                            <td><strong>{this.countTotal()}</strong></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Button variant="outline-primary" className="flex-fill" onClick={() => {this.showSum()}}>
                                    Create order
                                </Button>
                            </td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        );
    }
}

function getProducts() {
    return [
        {
            id: 100,
            title: 'Ipnone 200',
            price: 12000,
            rest: 10,
            current: 1
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            current: 1
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            current: 1
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
            current: 1
        }
    ];
}

