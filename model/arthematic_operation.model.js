const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let arthematic_operations = new Schema({
    num1: {type: Int32, required: true, max: 12},
    num2: {type: Int32, required: true, max: 12},
    operation: {type: String, required: true, max: 12},
    result:{type:Int32  }

});

//Export the model
module.exports = mongoose.model('arthmatic_operation_DB', arthematic_operations);
