import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { FormControl, TextField } from '@material-ui/core';
import { Link } from "react-router-dom";
import CustomerValidation from './CustomerValidations';
import { withRouter } from "react-router-dom";

class CustomerForm extends React.Component {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
            name : "",
            email: "",
            contactNo: "",
            dob: "",
            address:
            {
                doorNo: "",
                street: "",
                area: "",
                city: "",
                state: "",
                pinCode: "",
            }      

        };
        this.validators = CustomerValidation;
        this.resetValidators();
    }

    updateValidators = (fieldName, value) => {
        this.validators[fieldName].errors = [];
        this.validators[fieldName].state = value;
        this.validators[fieldName].valid = true;
        this.validators[fieldName].rules.forEach((rule) => {
            if (rule.test instanceof RegExp) {
                if (!rule.test.test(value)) {
                    this.validators[fieldName].errors.push(rule.message);
                    this.validators[fieldName].valid = false;
                }
            } else if (typeof rule.test === 'function') {
                if (!rule.test(value)) {
                    this.validators[fieldName].errors.push(rule.message);
                    this.validators[fieldName].valid = false;
                }
            }
        });
    }

    resetValidators = () => {
        Object.keys(this.validators).forEach((fieldName) => {
            this.validators[fieldName].errors = [];
            this.validators[fieldName].state = '';
            this.validators[fieldName].valid = false;
        });
    }

    displayValidationErrors = (fieldName) => {
        const validator = this.validators[fieldName];
        const result = '';
        if (validator && !validator.valid) {
            const errors = validator.errors.map((info, index) => {
                return <span style={errorStyle} key={index}>* {info}</span>;
            }); 

            return (
                <div style={errorStyle} className="col s12 row">
                    {errors}
                </div>
            ); 
        }
        return result;
    }

    handleInputChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.address[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }

    handleInputChangeCustomer(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState[inputPropName] = event.target.value;
        this.setState(newState);
        this.updateValidators(inputPropName, event.target.value);
    }

    

    onEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    

   

    onDoorNoChange = (e) => {
        this.setState(state => ({ address: { ...state.address, doorNo: e.target.value }, }));
    }

    onStreetChange = (e) => {
        this.setState(state => ({ address: { ...state.address, street: e.target.value }, }));
    }

    onAreaChange = (e) => {
        this.setState(state => ({ address: { ...state.address, area: e.target.value }, }));
    }

    onCityChange = (e) => {
        this.setState(state => ({ address: { ...state.address, city: e.target.value }, }));
    }

    onStateChange = (e) => {
        this.setState(state => ({ address: { ...state.address, state: e.target.value }, }));
    }

    


    onSubmit = (e) => 
    {
        e.preventDefault();
        console.log("Submitted");
        alert("Customer Added");
        console.log(this.state);
        this.props.onSubmitCustomer
        (
            {
                name: this.state.name,
                email: this.state.email,
                contactNo: this.state.contactNo,
                dob: this.state.dob,
                doorNo: this.state.address.doorNo,
                street: this.state.address.street,
                area: this.state.address.area,
                city: this.state.address.city,
                state: this.state.address.state,
                pinCode: this.state.address.pinCode,
            }
        );
        
    }

    render() {
        return (
            
                <div class="login-div">
                    <div class="logo"></div>
                    <div class="title">Coding Den</div>
                     
                    <div class="fields">
                    <div class="username"> <input type="name" class="user-input" placeholder="Name" /></div>
                    <div class="username"> <input type="name" class="user-input" placeholder="E-mail" /></div>
                    <div class="username"> <input type="name" class="user-input" placeholder="Contact-No" /></div>
                    <div class="username"> <input type="name" class="user-input" placeholder="DOB" /></div>
                    <div class="username"> <input type="name" class="user-input" placeholder="Door No" /></div>
                    <div class="username"> <input type="name" class="user-input" placeholder="Street" /></div>
                    <div class="username"> <input type="name" class="user-input" placeholder="Area" /></div>
                    <div class="username"> <input type="name" class="user-input" placeholder="City" /></div>
                    <div class="username"> <input type="name" class="user-input" placeholder="username" /></div>
                    <div class="username"> <input type="name" class="user-input" placeholder="username" /></div>
                    <div class="username"> <input type="name" class="user-input" placeholder="username" /></div>

                </div>






               
        )
    }

}
export default withRouter(CustomerForm);

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: "10px",
};
const errorStyle = {
    color: 'red'
};