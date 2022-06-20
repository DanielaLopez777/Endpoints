'use strict';

const loopback  = require("loopback");

const LoopBackContext = require('loopback-context');

module.exports = function(Profile) {

    Profile.followUser = async function (prof, options){
        
        const token = options && options.accessToken;
        const userId = token && token.userId;
        const user = userId ? 'user#' + userId : '<anonymous>';
        console.log('(%s)', user);
        /*
        let ctx = LoopBackContext.getCurrentContext();
        let currentUser = ctx && ctx.get('currentUser');
        let user =  currentUser.username;*/



        let follows = Profile.app.loopback.getModel("Follows");
        let data = await Profile.findOne({where:{prof}});

        follows.create({follower: user, following: prof});       
        return data;
        
    }
    Profile.remoteMethod('followUser',{
            http: { verb: 'post'},
            accepts: [
                { arg: "prof", type: "number" },
                {arg: "options", type: "object", http: "optionsFromRequest"}
            ],
            returns: { arg: "FollowUser", type: "object" }
    });

    /*          
    Profile.unfollowUser = async function (prof, username){
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
    });*/
};

