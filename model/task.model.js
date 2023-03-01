module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define( "tasks", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        is_finished: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    }, {timestamps: true} )
    return Task;
 }