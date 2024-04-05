"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const database_1 = require("../database/database");
const sequelize_1 = require("sequelize");
class Todo extends sequelize_1.Model {
}
exports.Todo = Todo;
Todo.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    duration: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    sequelize: database_1.database,
    timestamps: true,
    tableName: 'Todo'
});
