var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/giveawayappv2", {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true
});

mongoose.connection.on('error',function (err) {  
   throw err;
}); 


module.exports.User = require( "./user");