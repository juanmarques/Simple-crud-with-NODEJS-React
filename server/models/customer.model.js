const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    customerID:{type:Number , required: true},
    companyID:{type:Number,required: true},
    createDate: {type: Date, required: true},
    rewardsNumber:{type:String , required:true},
    name: {type: String, required: true, max: 100},
    email: {type:String,required:true},
    dob: {type:Date,required:true}
});

// Export the model
module.exports = mongoose.model('Customer', CustomerSchema);