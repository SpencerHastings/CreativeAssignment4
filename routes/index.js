var express = require('express');
var router = express.Router();
var posts = {
    mcdonalds: [
    ],
    caferio: [
    ],
    cheesecake: [
    ]
};

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile('index.html', { root: 'public' });
});

router.get('/restaurant', function(req, res) {
    console.log("In");
    res.send(posts);
});

router.post('/restaurant', function(req, res) {
    console.log("In Post");
    console.log(req.body);
    
    var restaurant = req.query['q'];
    posts[restaurant].push(req.body);
    console.log(posts);
    
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;
