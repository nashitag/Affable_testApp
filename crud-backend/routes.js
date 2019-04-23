var express = require('express');
var router = express.Router();

const Influencer = require('./model/schema');

//retrieving data
// router.get('/allinfluencers', (req, res, next)=>{
//     Influencer.find(function(err,items){
//         if(err){
//             res.json(err);
//         }
//         else{
//             console.log("getting all users");
//             res.json(items);
//         }
//     })
// })

//sort by follower count ->
router.get('/allinfluencers', (req, res, next)=>{
    Influencer.find(function(err,items){
        if(err){
            res.json(err);
        }
        else{
            console.log("getting all users");
            res.json(items);
        }
    }).sort({followerCount:-1}).limit(20)
})

//sort 
router.get('/sort/:count', (req, res, next)=>{
    var searchQuery = {};
    count = req.params.count;
    console.log("count"+count);
    // var count = req.query['count'];
    console.log(req.query);
   
    // searchQuery = { req.query.str : req.query.num };
    Influencer.find(function(err,items){
        if(err){
            res.json(err);
        }
        else{
            console.log("getting all users");
            console.log(items)
            res.json(items);
        }
    }).sort(req.query).limit(req.params.count*20)
})



router.get('/getsingleinfluencer', function(req, res, next) {
    var searchQuery = {};
  
    if(req.query.username)
      searchQuery = { username: req.query.username };
      console.log(searchQuery)
  
      Influencer.find(searchQuery, function(err, user){
      if (err) {
        res.status(400);      
        res.send();
      }
      console.log("returning user in getsingleinfluencer");
      res.send(user);
    })
});
router.get('/getInterest', function(req, res, next) {
    var searchQuery = {};
    console.log(req.query);
    // count = req.params.count;
  
      Influencer.find(req.query, function(err, user){
      if (err) {
        res.status(400);      
        res.send();
      }
      console.log("returning user in interest");
      res.send(user);
        })
});

router.get('/getCount/:count', function(req, res, next) {
    var searchQuery = {};
      searchQuery = { followerCount: {"$gte" : req.query.x, "$lte" : req.query.y} };
      count = req.params.count;
      console.log("count " + count);
      console.log(searchQuery)
      console.log(req.query);
      Influencer.find(searchQuery, function(err, user){
      if (err) {
        res.status(400);      
        res.send();
      }
      console.log("returning user in stats");
      res.send(user);
        // }).sort({followerCount:-1}).skip((count-1)*20).limit(20)
    }).sort({followerCount:-1}).limit(20*count)

});

router.get('/getKeyword', function(req, res, next) {
    var searchQuery = {};
    console.log(req.query);
    searchQuery =  {$text: { $search: req.query.keyword } } 
    console.log(searchQuery);

      Influencer.find(searchQuery, function(err, user){
      if (err) {
        res.status(400);      
        res.send();
      }
      console.log("returning user in keywords");
      res.send(user);
        })
});


router.post('/addinfluencer', (req, res, next)=>{
    let newInfluencer= new Influencer({
        username: req.body.username,
        fullName: req.body.fullName,
        picture: req.body.picture,
        biography: req.body.biography,
        followerCount: req.body.followerCount,
        stats: req.body.stats
        
    });
    newInfluencer.save((err, item)=>{
        if(err){
            res.json(err);
        }
        else{
            console.log("posting now");
            res.json({msg:'Item has been added'});
        }
    });
})

router.delete('/delete', (req, res, next)=>{
    
    Influencer.remove({}, function(err, item){
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:'Items has been deleted'});
        }
    });
})


module.exports = router;

