const express = require('express');
const router = express.Router();
const https = require('https');
const map = require('rxjs/operators');
var request = require('request');


const url= 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e0f5cd17-fe74-4296-bbf5-8e2aceef9558/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45IG4UA7IV%2F20190419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190419T035307Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEh%2BeTpM970J6u890EoBejtfKgN%2BH%2FyyWFwXv8teGi4YAiBbaZQcgIujXOu6qG4U22CnFQwr%2Ba9kVwnP5mFrkrIhFyraAwhSEAAaDDI3NDU2NzE0OTM3MCIMY4ywKomOBHz230eEKrcDZwqAke3arhrjN4KV%2FLUO1DmkaUAaHVblOhCAqx3%2Bj4gtOnGGOgMXRewFrpUW56lTuZq7Ipf%2BxDfgBIuMoo%2F3JgbiQjT9Q2sI%2B0tdtRxpmVtBRuHGEBsaJnnaa%2FrE63nrSM99dV77KJtYX1WSFW7%2F%2BQZk4tCPDNF4WX%2F9%2BIH7Luh28md2i8WkHADcu%2F9XyBFA53WzrSVNjFo8mgNeMNdoiHPIwClVJ4Y0M9SLMmdJPEjKVn6vXV6qkYCl7fDaoHVIf7paXfL2BLluXmHl0NNqFUH2C%2BwmKWApK3Pv4tlkqVB43mW7y3IRoynJIiFIJ2hOw51C8ZV5DSPSolTPMHx7udmtYiPNM2PstJCSPVDwrpH0ruYwCyp1GzbLeUC3NzZIPJjELWH3YLlrIfElEPenWOD10H6zAgbOntd1YpG7Gn%2Fk5kSRAQMuJqmFur0QuZZK3twwMa34bsEiuh7xqVanJ5C9%2BzVCXa3568yulCXGr0n9DbLR5Lag0CRt0GylRJiZZPSc4RESXQk%2Fx8gsRk5DTh1vNb%2F2cWvcsFtIHZl0V2gIhvXNbPIW6KL6abD97nCVEsmkqsql7jDRwuTlBTq1Acl7Nvx7zZPKfzqXF70WZP0KEWkKEed8KbErPijz3VvHnyOkt5em7Fq4H2%2FauTiU3R6xevF51plTcTjTcYU6fK5TMn4D2MyPJ%2FtJkHFfSNdf5ccDyD75vjaSvofeaPkyvhN5Mto75D18v2qtzaa2Q90L2OvH96KFHMrMtEJrpoyocrPWSUtZM3vqzJJ6YboOsK3mCYdihSumHUDU3Ft%2FDrNsWu8tbCF9yyaAgYms71UjohAOTys%3D&X-Amz-Signature=3ab6a026350e4c9f71f9bad6ad50470afee3cd81d39b7778aa167a6c98d0300b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22';

router.get('/',function(req, res){
    request({
      url: url,
      json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          console.log(body) // Print the json response
      }
    })
  });


//现在involve user input

router.get('/:username',(req,res,next)=>{
    const username = req.params.username;
    

    if (username === 'special'){
        res.status(200).json({
            message:"Wow You discovered the special username!",
            username: username
            
        });
    }else{
        res.status(200).json({
            message:"You input an username~",
            username: username
        });
    }
});




module.exports = router;