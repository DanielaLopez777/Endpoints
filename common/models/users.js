
  var options = {
    relations: {
      articlesRelation: {
        model: profile,
        type: hasMany,
        foreignKey: username
      },
    },
  };
  
  var user = loopback.Model.extend('user', options);