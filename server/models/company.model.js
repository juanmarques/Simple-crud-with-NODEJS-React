const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CompanySchema = new Schema({
    companyID:{type:Number,required: true},
    createDate: {type: Date, required: true},
    name: {type: String, required: true, max: 100}   
});

// Export the model
module.exports = mongoose.model('Company', CompanySchema);