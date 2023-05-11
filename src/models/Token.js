import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";
import { User } from "./User.js";

export const Token = sequelize.define('Token', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    token: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
}, {
    timestamps: false
});

User.hasOne(Token, {
    foreignKey: 'user_id',
    sourceKey: 'id'
});

Token.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id'
});