'use strict';
const util = require('util');

module.exports = async function(server) {
    // https://loopback.io/doc/en/lb3/Creating-a-database-schema-from-models.html
    const ds = server.dataSources.postgresDB;
    const query = 'SELECT EXISTS (SELECT FROM pg_tables WHERE tablename = $1);'
    const lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
    let missingTables = [];


    for (let i = 0; i < lbTables.length; i++) {
        let tableName = lbTables[i];
        await new Promise((resolve, reject) => {
            ds.connector.executeSQL(query, [tableName.toLowerCase()], {}, (err, result) => {
                if (err) reject(err);
    
                if (!result[0].exists) resolve(tableName);
                resolve();
            });
        })
        .then(res => {
            if (res) missingTables.push(res);
        })
        .catch(err =>
            {console.log("🚀 ~ file: create-lb-tables.js ~ line 24 ~ awaitnewPromise ~ err", err)}
        );
    }

    if (missingTables.length > 0) {
        await ds.automigrate(missingTables, function(er) {
            if (er) throw er;
            console.log(
                'Loopback table [' + missingTables + '] created in ',
                ds.adapter.name
            );
        });
    } else {
        console.log('No Loopback tables to create');
    }

};
