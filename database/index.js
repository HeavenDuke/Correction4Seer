var Sequelize = require('sequelize');
var models = require('./models');
var path = require('path');

module.exports = function (database, username, password, config) {
    var sequelize = new Sequelize(database, username, password, config);
    var User = sequelize.import(path.join(__dirname, 'models/user'));
    var Error = sequelize.import(path.join(__dirname, 'models/error'));
    var Correction = sequelize.import(path.join(__dirname, 'models/correction'));
    var Chapter = sequelize.import(path.join(__dirname, 'models/chapter'));

    Error.belongsTo(Chapter);
    Chapter.hasMany(Error);
    Chapter.hasMany(Correction);
    Correction.belongsTo(Chapter);
    Chapter.hasMany(Chapter);

    return sequelize;
};