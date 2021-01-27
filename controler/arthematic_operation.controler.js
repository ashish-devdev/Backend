const e = require("express");
const arthematic_operations = require("../model/arthematic_operation.model");
const Busboy = require('busboy');


const fs = require('fs');
const AWS = require('aws-sdk');

// Enter copied or downloaded access id and secret here
const ID = 'AKIAJYGZEGGOOBDYGKJA';
const SECRET = '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';

// Enter the name of the bucket that you have created here
const BUCKET_NAME = 'testmages123';

exports.user_create = function (req, res, next) {
  const arr = new Array(req.body.arr);
  var num1, num2;
  let result;
try{

    for (let i = 0; i < arr[0].length; i++) {
        num1 = arr[0][i].num1;
        num2 = arr[0][i].num2;
        if (arr[0][i].operation == "add") {
            
            result = num1 + num2;
            let user = new arthematic_operations({
                num1: num1,
                num2: num2,
                operation: "add",
                result: result,
            });
            user.save(function (err) {
                if (err) {
                    return next(err);
                }
            });
        } else if (arr[0][i].operation == "mul") {
            
            result = num1 * num2;
            let user = new arthematic_operations({
                num1: num1,
                num2: num2,
                operation: "mul",
                result: result,
            });
            user.save(function (err) {
                if (err) {
                    return next(err);
                }
            });
        }

        
        
        
    }
    res.send("user created successfully")
}
catch(e){
    console.log(e);
}    
    
    
    
};

exports.userGet_info = function (req, res, next) {
  arthematic_operations.find({}, function (err, users) {
    console.log(typeof(users));
    // users.forEach(list => {
    //  console.log(list.num1);
    
    // });
    res.send(users)
  });
};


exports.user_get_by_id=function(req,res,next)
{
    let id=req.query.id
    arthematic_operations.findById(id,function(err,users)
    {
        if(err)
        {
            console.log(err);
            res.send(err)
        }
        else{
            console.log(users.num1);
            res.send(users)
        }

    });

};


exports.post_image=function(req,res,next)
{

  
    const img=req.files;
    console.log(req.files)
    
    // Initializing S3 Interface
    const s3 = new AWS.S3({
        accessKeyId: ID,
        secretAccessKey: SECRET
    });
    // console.log(s3)
    
    const params = {
        Bucket: BUCKET_NAME,
        Key:img.image.name, // file name you want to save as
        Body: img.image.data
    };

 console.log(params)
    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            res.send(err)
        }
       
        res.send(data.Location)
    });

}
