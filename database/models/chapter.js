/**
 * Created by heavenduke on 9/27/15.
 */
/**
 * Created by heavenduke on 9/27/15.
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('chapter', {
        chapterId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        underscored: true
    });
};