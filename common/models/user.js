'use strict';

module.exports = function(Users) {
    Users.login = async function (email,password){
        const Usr = Users.app.loopback.getModel("User");
        return Usr.login({
            email,
            password
        });
    }
    Users.remoteMethod(
        'login',{
            http: { verb: 'post'},
            accepts: [
                { arg: "email", type: "string" },
                { arg: "password", type: "string" },
            ],
            returns: { arg: "response", type: "object", root: true }
        }
    )
};
