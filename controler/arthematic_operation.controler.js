const arthematic_operations = require("../model/arthematic_operation.model");

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
