import { database } from "../database/database";
import { DataTypes, Model } from "sequelize";

export interface TodoAttributes {
    id: string;
    title: string;
    description?: string;
    duration: string;
    status: boolean;
}

export class Todo extends Model<TodoAttributes>{}
    
Todo.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN
        }
    },
{
    sequelize: database,
    timestamps: true,
    tableName: 'Todo'
})
