const validateEmail= require('./validateEmail')
const validateName= require('./validateName')
const validatePhoneNumber= require('./validatePhoneNumber')
const validateAddress= require('./validateAddress')
const validateCity= require('./validateCity')
const validateZipCode= require('./validateZipCode')
const validateDateOfBirth= require('./validateDateOfBirth')

module.exports = (req, res) => {
    let userData = req.body;
    
    if (!userData.name ||!userData.email ||!userData.phoneNumber ||!userData.address ||!userData.city ||!userData.zipCode ||!userData.dateOfBirth) {
        return res.status(400).json({
            error: "Please enter all fields"
        });
    }

    if (!userData.name ||!userData.email ||!userData.phoneNumber ||!userData.address ||!userData.city ||!userData.zipCode ||!userData.dateOfBirth) {
        return res.status(400).json({
            error: "Please enter all fields"
        });
    } else if (!validateEmail(userData.email)) {
        return res.status(400).json({
            error: "Please enter a valid email"
        });
    }  

    // Checking the name fields
    if (!validateName(userData.name)) {
        return res.status(400).json({
            error: "Please enter a valid name. It must be two names."
        });
    }
    // Checking phone number field
    if (!validatePhoneNumber(userData.phoneNumber)) {
        return res.status(400).json({
            error: "Please enter a valid phone number"
        });
    } 
    // If there is no address provided then we don't need to check the rest
    if (!userData.address) {
        return res.status(400).json({
            error: "Please enter a valid address"
        });
    } else if (!validateAddress(userData.address)) {
        return res.status(400).json({
            error: "Please enter a valid address"
        });
    }
    // Checking city field
    if (!userData.city) {
        return res.status(400).json({
            error: "Please enter a valid city"
        });
    }
    if (!validateCity(userData.city)) {
        return res.status(400).json({
            error: "Please enter a valid city"
        });
    }
    
    next();
    return res.status(200).json({
        message: "You have successfully registered"
    });
}; 
module.exports = validateRegister;
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