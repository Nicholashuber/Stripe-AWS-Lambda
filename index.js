var AWS = require('aws-sdk');
var sf = require('node-salesforce');

exports.handler = function(event, context, callback) {

    console.log("event ", JSON.stringify(event));
    var eventbody = event.body;
    var obj = JSON.parse(eventbody);


    console.log("event32 ", event.body);
    console.log("Amount ", obj.data.object.amount);
    console.log("Status of Payment ", obj.data.object.paid);
    console.log("Status of Payment2 ", obj.type);
    console.log("type of event ", obj.data.object.object);
    console.log("event333 ", obj.name);

    
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
        },
        //body: JSON.stringify({ "message": "Hello World!" })
        body: JSON.stringify(event)
    };




    callback(null, response);
};
