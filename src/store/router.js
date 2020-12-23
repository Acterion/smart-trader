import React from 'react';
import {observable, computed, action} from 'mobx';

import Cart from '~p/cart';
import Order from '~p/order';
import Result from '~p/result';

class Router{
    routes = {
        cart: () => <Cart/>,
        order: () => <Order/>,
        result: () => <Result/>,
    }

    @observable activeRoute = 'cart'

    @computed get component(){
        // проверка есть ли роут в списке, если нет -> p404
        return this.routes[this.activeRoute]();
    }

    @action moveTo(route){
        // проверка есть ли роут в списке
        this.activeRoute = route;
    }
}

export default new Router();