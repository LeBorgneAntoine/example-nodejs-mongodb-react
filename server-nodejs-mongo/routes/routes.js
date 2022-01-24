const ExampleModel = require("../models/ExampleModel");//import the model to query the database
const router = require('express').Router();

//--- define routes [START] ---

//Trigger on "http://localhost:8080/mongodb/data"
router.get('/getData', (req, res, next) => {

    //get all the ExampleModel documents
    ExampleModel.find({}, (error, exampleArray) => {

        if(error){
            res.send({result: false, message: 'Err: An error occur on search'})
        }else{
            res.send({result: true, data: exampleArray})
        }

    })

})

//Trigger on "http://localhost:8080/mongodb/insert"
router.post('/insertOne', (req,res,next) => {

    let fieldA = req.body.fieldA //define by form fields id
    let fieldB = req.body.fieldB

    ExampleModel.create({
        fieldA: fieldA,
        fieldB: fieldB
    }, (err, exampleCreated) => {
        if(err)res.send({inserted: false})//notify the error
        else res.send({inserted: true})// notify the client of the success
    })

})

//Trigger on "http://localhost:8080/mongodb/deleteOne"
router.post('/deleteOne', (req,res,next) => {

    let fieldA = req.body.fieldA //define by form fields id

    ExampleModel.deleteOne({fieldA: fieldA}, (error => {

        if(error)res.send({deleted: false})
        else res.send({deleted: true})

    }))
})


//Trigger on "http://localhost:8080/mongodb/deleteOne"
router.post('/updateOne', (req,res,next) => {

    let fieldA = req.body.fieldA //define by form fields id

    ExampleModel.updateOne({fieldA: fieldA}, (error => {

        if(error)res.send({updated: false})
        else res.send({updated: true})

    }))
})

//--- define routes [END] ---

module.exports = router;