'use strict';

module.exports = function(Users) {
    Users.login = async function (request, response){
        req=request.json('');
        return req;
    }
    Users.remoteMethod(
        'login',{
            http: { verb: 'post'},
            returns:[
                {args: 'message', type:'string'},
            ]
        }
    )
};
