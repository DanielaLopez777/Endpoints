'use strict';


module.exports = function(Profile) {
    var app = require('./../../server/server'); 
    const follows = app.loopback.getModel("Follows");

    Profile.followUser = async function (prof, username){
        const data = await Profile.findOne({where:{prof}});
        follows.create({follower: username, following: prof});       
        return data;
    }
    Profile.remoteMethod('followUser',{
            http: { verb: 'post'},
            accepts: [
                { arg: "username", type: "string" },
                { arg: "follow", type: "string" }
            ],
            returns: { arg: "FollowUser", type: "object" }
    });

    Profile.unfollowUser = async function (profusername){
        const data = await Profile.findOne({where:{username}})
        console.log("data", data)
        const deleted = await Profile.deleteById(data.id)
        console.log(deleted)
        return data;
    }
    Profile.remoteMethod('unfollowUser',{
            http: { verb: 'delete'},
            accepts:{ arg: "username", type: "string" },
            returns: { arg: "UnfollowUser", type: "object" }
    });
};

