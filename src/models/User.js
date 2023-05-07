import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    number_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        unique: true
    }
});
