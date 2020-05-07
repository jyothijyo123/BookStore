var express = require('express');
var router = express.Router();

router.get('/', function(req, res){    
    res.send("Welcome to Node JS V1");
});

//modules
require('./proadd')(router);
require('./prodel')(router);  //added for explaination
require('./AuthorDetailsAdd')(router);
require('./AuthorDetailsDel')(router);//added for explaination
require('./catadd')(router);
require('./catdel')(router);
require('./Users')(router);
require('./ReviewsRatings.js')(router);
require('./Sidebar')(router);
//export
module.exports.router = router;