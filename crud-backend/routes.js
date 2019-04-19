var express = require('express');
var router = express.Router();

const Influencer = require('./model/schema');

//retrieving data
router.get('/allinfluencers', (req, res, next)=>{
    Influencer.find(function(err,items){
        if(err){
            res.json(err);
        }
        else{
            console.log("getting all users");
            res.json(items);
        }
    })
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
    console.log(req);
    //{params:{'stats.followerCount':count}}
    // if(req.query.followerCount)
    //   searchQuery = { followerCount: req.query.stats.followerCount };
    //   console.log(searchQuery)
  
      Influencer.find(req.query, function(err, user){
      if (err) {
        res.status(400);      
        res.send();
      }
      console.log("returning user in stats");
      res.send(user);
        })
});
function checkNested(obj) {
    for (let prop in obj) {        
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] == "object"){
                console.log(`Key: ${prop}`)
                checkNested(obj[prop]);
            } else {
              console.log(`Key: ${prop} 'value: ${obj[prop]}`)
            }
        }
    }
}

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

