const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const InfluencerSchema = Schema({
    username: {type: String},
    fullName: {type: String},
    picture: {type: String},
    biography: {type: String},
    followerCount: {type: Number},
    stats: {
        followerCount: {type: Number},
        interests: {type:Array},
        engagement: {
            avgCommentsRatio: {type: Number},
            avgLikesRatio: {type: Number}
        }

    }

})



// const engSchema = module.exports = mongoose.model('engSchema', engSchema);

const Influencer = module.exports = mongoose.model('Influencer', InfluencerSchema);