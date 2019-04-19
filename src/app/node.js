var request = require("request")

var url = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e0f5cd17-fe74-4296-bbf5-8e2aceef9558/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45PGDAMGPB%2F20190418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190418T070747Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGh7gFN5iLOJxFuekHRSMBZKof9%2BV7%2FT0PVvmusEM45XAiBSkz0Lce%2FcbGGolJz1SVQMzOX1iKttpozUoejjMmVj9SraAwg%2FEAAaDDI3NDU2NzE0OTM3MCIMwSgWGThSU7zhSh2bKrcDFiB8PnSR2mJVpiDst1bVw4vtabIqu50xsd%2BzyrGCy5Ja2VxjDyDUqfkunXU0tQUEFYc3e0OsitYioFdR91N7OwCLi7PajGpTRSlHAswIQ7mDGoOnlQNKm5rHu81qjYgV42ebA4CweinYptVJs%2FQLRVB4XQDu7jTQAK6nueuDJs29hL872m9bO6PhQIIipVRHYVpr8PqjuJw8AG15W4lw6iDPYuqGMvcJzkOB2bZ2EzJOd8AZG54MHA%2F2J40bqGqBr8bAnqVxm%2FAIMSJnfzM2sLjOJSEatrzuwvPrjRr%2Bw%2FHKQ3BwlObtWHjD77WjHItPN9wHbzhrloAXsux9QKkvM5UFDpi96mVer%2F3MWc9JNqPnPX6ilFK5sEZdivjbQzGTsWeetPIGG9Ng%2B4WdbduvQRn7Vw83V0WZZHyDWv1fkYkVJBU5V41psBuR6tzBuEWI2SmIhc9v97Z2V%2FwmeZxSiB8IOI4L3cUuYY9KunSJsiciJDlXffo3go0136BEdZjdIr3MqQEskZ0M%2BrotiwGFpangav%2BSA3S%2FaX14KXz7XWjP9Zw2uT5rXjFTo1DapYm5IZNfHyWN%2FzDwmODlBTq1AdBzcJnGmTPn6Uc%2FlVRR%2BPwT6pEb2cM0fqzVqHjYNZFNAaiwt0tiMAo5H55YQk0Pea0r3YQ8K5%2B7C%2FqtxpfF0%2FzoVds4BIlxtDqL9InFTp3GIQv4nGOV2T%2BS%2BK%2BLnffZtv9bqbZ%2BEv4xzrhLE5VHm%2FBvtwaJHE%2FiXsGOM5BxPz%2BDNtcaQ5qymvyJHhJ4tQX94wLVw5HwPvMrNOb4KGB791sq5UjDD%2FWdpWIcv%2FyIxenZhm9ytwI%3D&X-Amz-Signature=7b16c53f0ea1c47a9d8f327934a2e56b8d52e477427ace50a756f982bebc76aa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22';
request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log("Server running");
        console.log(body) // Print the json response
    } else if(error){
        console.log("error");
    }
})

// const request = require('request');

// var url = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e0f5cd17-fe74-4296-bbf5-8e2aceef9558/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45PGDAMGPB%2F20190418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190418T070747Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGh7gFN5iLOJxFuekHRSMBZKof9%2BV7%2FT0PVvmusEM45XAiBSkz0Lce%2FcbGGolJz1SVQMzOX1iKttpozUoejjMmVj9SraAwg%2FEAAaDDI3NDU2NzE0OTM3MCIMwSgWGThSU7zhSh2bKrcDFiB8PnSR2mJVpiDst1bVw4vtabIqu50xsd%2BzyrGCy5Ja2VxjDyDUqfkunXU0tQUEFYc3e0OsitYioFdR91N7OwCLi7PajGpTRSlHAswIQ7mDGoOnlQNKm5rHu81qjYgV42ebA4CweinYptVJs%2FQLRVB4XQDu7jTQAK6nueuDJs29hL872m9bO6PhQIIipVRHYVpr8PqjuJw8AG15W4lw6iDPYuqGMvcJzkOB2bZ2EzJOd8AZG54MHA%2F2J40bqGqBr8bAnqVxm%2FAIMSJnfzM2sLjOJSEatrzuwvPrjRr%2Bw%2FHKQ3BwlObtWHjD77WjHItPN9wHbzhrloAXsux9QKkvM5UFDpi96mVer%2F3MWc9JNqPnPX6ilFK5sEZdivjbQzGTsWeetPIGG9Ng%2B4WdbduvQRn7Vw83V0WZZHyDWv1fkYkVJBU5V41psBuR6tzBuEWI2SmIhc9v97Z2V%2FwmeZxSiB8IOI4L3cUuYY9KunSJsiciJDlXffo3go0136BEdZjdIr3MqQEskZ0M%2BrotiwGFpangav%2BSA3S%2FaX14KXz7XWjP9Zw2uT5rXjFTo1DapYm5IZNfHyWN%2FzDwmODlBTq1AdBzcJnGmTPn6Uc%2FlVRR%2BPwT6pEb2cM0fqzVqHjYNZFNAaiwt0tiMAo5H55YQk0Pea0r3YQ8K5%2B7C%2FqtxpfF0%2FzoVds4BIlxtDqL9InFTp3GIQv4nGOV2T%2BS%2BK%2BLnffZtv9bqbZ%2BEv4xzrhLE5VHm%2FBvtwaJHE%2FiXsGOM5BxPz%2BDNtcaQ5qymvyJHhJ4tQX94wLVw5HwPvMrNOb4KGB791sq5UjDD%2FWdpWIcv%2FyIxenZhm9ytwI%3D&X-Amz-Signature=7b16c53f0ea1c47a9d8f327934a2e56b8d52e477427ace50a756f982bebc76aa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22';

// request(url, { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body);
//   console.log(body);
// });


