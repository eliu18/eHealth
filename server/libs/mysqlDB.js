const mysqlx = require('@mysql/xdevapi');

mysqlx.getSession('mysqlx://localhost:33060')
    .then(session => {
        return session.sql('CREATE TABLE schemaName.tableName (column INT)')
            .execute()
            .then(() => {
                return session.getSchema('schemaName').getTable('tableName');
            });
    })
    .then(table => {
        // work with the Table object
    })
    .catch(err => {
        // something went wrong
    });