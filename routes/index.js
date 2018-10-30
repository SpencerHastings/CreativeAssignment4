var express = require('express');
var router = express.Router();
//0 - McDonalds
//1 - Cafe Rio
//2 - Cheesecake Factory
var posts = [
    [{
            name: 'Bob',
            post: 'Great restaurant.'
        },
        {
            name: 'Susan',
            post: 'This sucks.'
        }
    ],
    [{
            name: 'Bob',
            post: 'Great restaurant.'
        },
        {
            name: 'Susan',
            post: 'This sucks.'
        }
    ],
    [{
            name: 'Bob',
            post: 'Great restaurant.'
        },
        {
            name: 'Susan',
            post: 'This sucks.'
        }
    ]
];

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile('index.html', { root: 'public' });
});

router.get('/restaurant/mcd', function(req, res) {
    console.log("In MCD");
    res.send(posts);
});

router.post('/restaurant/mcd', function(req, res) {
    console.log("In  Post");
    console.log(req.body);
    
    var restaurant = req.query['q'];
    
    if (restaurant == "mcdonalds")
    {
        posts[0].push(req.body);
    }
    else if (restaurant == "caferio")
    {
        posts[1].push(req.body);
    }
    else if (restaurant == "cheesecakefactory")
    {
        posts[2].push(req.body);
    }
    else
    {
        //default
    }
    
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;
