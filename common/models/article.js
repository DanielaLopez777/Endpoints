'use strict';

module.exports = function(Article) {
    Article.listArticles = async function (id, author, title){
        const filter = {where : {}}
        if (id) {
            filter.where.id = id
        }
        if (author) {
            filter.where.author = author
        }
        if (title) {
            filter.where.title = title
        }
        const data = await Profile.findOne(filter)
        return data;
    }
    Article.remoteMethod('listarticles',{
            http: { verb: 'get'},
            accepts: [
                { arg: "id", type: "number" },
                { arg: "author", type: "string" },
                { arg: "title", type: "string" }
            ],
            returns: { arg: "listarticles", type: "object" }
        });
    
};