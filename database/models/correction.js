/**
 * Created by heavenduke on 9/27/15.
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('correction', {
        correctionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        correction: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        page: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        underscored: true
    });
};