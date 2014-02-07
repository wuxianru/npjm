var model=require('../model');
/*

 */
exports.createUser=function(req,res){
    var UserModel=model.User;
    var user = new UserModel();
    user.name='sam';
    user.save();
    res.send('init');
}
/*
 * GET users listing.
 */
exports.list = function(req, res){
    var User=model.User;
    User.find(function(err,doc){
        if(err){
            console.error(err);
        }
        res.send(doc);
    });

};