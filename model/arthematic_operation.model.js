const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let arthematic_operations = new Schema({
    num1: {type:Number, required: true, max: 12},
    num2: {type: Number , required: true, max: 12},
    operation: {type: String, required: true, max: 12},
    result:{type:Number  }

});

//Export the model
module.exports = mongoose.model('arthmatic_operation_DB', arthematic_operations);
