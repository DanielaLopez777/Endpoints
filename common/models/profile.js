'use strict';

const loopback  = require("loopback");

const LoopBackContext = require('loopback-context');

module.exports = function(Profile) {

    Profile.followUser = async function (prof, options){
        
        const token = options && options.accessToken;
        const userId = token && token.userId;
        let follows = Profile.app.loopback.getModel("Follows");
        let data = await Profile.findOne({where:{'username': prof}});
        let ProfileId= data.id;
        follows.create({follower: userId, following: ProfileId});       
        return data;
        
    }
    Profile.remoteMethod('followUser',{
            http: { verb: 'post'},
            accepts: [
                { arg: "prof", type: "string" },
                {arg: "options", type: "object", http: "optionsFromRequest"}

            ],
            returns: { arg: "data", type: "object" }
    });


    Profile.unfollowUser = async function (prof, options){
        
        const token = options && options.accessToken;
        const userId = token && token.userId;
        let follows = Profile.app.loopback.getModel("Follows");
        let data = await Profile.findOne({where:{'username': prof}});
        let ProfileId= data.id;

        follows.deleteById(ProfileId);     

        return data;
        
    }
    Profile.remoteMethod('unfollowUser',{
            http: { verb: 'post'},
            accepts: [
                { arg: "prof", type: "string" },
                {arg: "options", type: "object", http: "optionsFromRequest"}

            ],
            returns: { arg: "data", type: "object" }
    });
};

