var config = {};

const DB_USER = 'leshan';
const DB_PASS = 'Leshan123';

// Replace with your standard connection string from MongoDB Atlas
config.mongoURI = {
    production: `mongodb://${DB_USER}:${DB_PASS}@ac-tojrvgb-shard-00-00.wbimfdv.mongodb.net:27017,ac-tojrvgb-shard-00-01.wbimfdv.mongodb.net:27017,ac-tojrvgb-shard-00-02.wbimfdv.mongodb.net:27017/darkroom?ssl=true&replicaSet=atlas-9i1gxo-shard-0&authSource=admin&retryWrites=true&w=majority`,
    development: `mongodb://${DB_USER}:${DB_PASS}@ac-tojrvgb-shard-00-00.wbimfdv.mongodb.net:27017,ac-tojrvgb-shard-00-01.wbimfdv.mongodb.net:27017,ac-tojrvgb-shard-00-02.wbimfdv.mongodb.net:27017/darkroom-dev?ssl=true&replicaSet=atlas-9i1gxo-shard-0&authSource=admin&retryWrites=true&w=majority`,
    test: `mongodb://${DB_USER}:${DB_PASS}@ac-tojrvgb-shard-00-00.wbimfdv.mongodb.net:27017,ac-tojrvgb-shard-00-01.wbimfdv.mongodb.net:27017,ac-tojrvgb-shard-00-02.wbimfdv.mongodb.net:27017/darkroom-test?ssl=true&replicaSet=atlas-9i1gxo-shard-0&authSource=admin&retryWrites=true&w=majority`,
};

module.exports = config;
