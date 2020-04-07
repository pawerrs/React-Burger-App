import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './ComponentData.module.css';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    };

    render() {
        return (
            <div className= {classes.ContactData}>
                <h4>Enter your data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="postalCode" placeholder="Postal Code" />
                    <Button btnType="Success" />
                </form>
            </div>
        );
    }
}

export default ContactData;