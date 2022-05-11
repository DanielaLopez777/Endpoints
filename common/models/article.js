'use strict';

module.exports = function(Article) {
    Profile.listArticles = async function (tag, author, favorited){
        const filter = {where : {}}
        if (tag) {
            filter.where.tag = tag
        }
        if (author) {
            filter.where.author = author
        }
        if (favorited) {
            filter.where.favorited = favorited
        }
        const data = await Profile.findOne(filter)
        return data;
    }
    Profile.remoteMethod('listarticles',{
            http: { verb: 'get'},
            accepts: [
                { arg: "tag", type: "string" },
                { arg: "author", type: "string" },
                { arg: "favorited", type: "string" }
            ],
            returns: { arg: "listarticles", type: "object" }
        });
    
    Profile.feedarticles = async function (tag, author, favorited){
        const data = Profile.findOne({where:{tag, author, favorited}})
        return data;
    }
    Profile.remoteMethod('feedarticles',{
            http: { verb: 'get'},
            accepts: [
                //parametros de querry que se utiliza 
            ],
            returns: { arg: "feedarticles", type: "object" }
        });
};