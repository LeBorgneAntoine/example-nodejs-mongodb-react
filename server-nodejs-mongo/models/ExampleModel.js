const mongoose = require('mongoose');
const {Schema} = require('mongoose');

//simple schema
//ref. details https://mongoosejs.com/docs/api/schema.html
const exampleSchema = new Schema({

    fieldA : {
        type: String,
        unique: true
    },
    fieldB : {
        type: Number
    }

})

//make the model accessible to the other part of code
module.exports = mongoose.model('ExampleModel',exampleSchema)// create and compile the model of 'ExampleModel' collection



