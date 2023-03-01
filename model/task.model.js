module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define( "tasks", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
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
    }, {timestamps: false} )
    return Task;
 }