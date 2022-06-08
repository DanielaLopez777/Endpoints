'use strict';

module.exports = function(Profile) {
    Profile.followUser = async function (username){
        const data = Profile.findOne({where:{username}})
        return data;
    }
    Profile.remoteMethod('followUser',{
            http: { verb: 'post'},
            accepts: { arg: "username", type: "string" },
            returns: { arg: "FollowUser", type: "object" }
    });

    Profile.unfollowUser = async function (username){
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

