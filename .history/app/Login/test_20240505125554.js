const validateEmail= require('./validateEmail')
const validateName= require('./validateName')
const validatePhoneNumber= require('./validatePhoneNumber')
const validateAddress= require('./validateAddress')
const validateCity= require('./validateCity')
const { User, Order } = require("../models");
class Validator{
    constructor(data){
        this.data = data;
    }
    validateEmail(){
        return validateEmail(this.data.email);
    }
    validateName(){
        return validateName(this.data.name);
    }
    validatePhoneNumber(){
        return validatePhoneNumber(this.data.phoneNumber);
    }
    validateAddress(){
        return validateAddress(this.data.address);
    }
}
module.exports={ Validator }