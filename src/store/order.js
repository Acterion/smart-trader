import {observable, computed, action} from 'mobx';

class Order{
    @observable formFields = {
        name: {
            label: 'Name',
            placeholder: 'First name',
            value: '',
            validator: ''
        },
        surname: {
            label: 'Surname',
            placeholder: 'Second name',
            value: '',
            validator: ''
        },
        email: {
            label: 'e-mail',
            placeholder: 'example@example.com',
            value: '',
            validator: ''
        }
    };

    @action change(field, data){
        this.formFields[field].value = data;
    }
}

export default new Order();