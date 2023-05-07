import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";
import { User } from "./User.js";

export const ParkingLot = sequelize.define('ParkingLot', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    faculty: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    identifier: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    timestamps: false
});

ParkingLot.hasMany(User, {
    foreignKey: 'parking_id',
    sourceKey: 'id'
})

User.belongsTo(ParkingLot, {
    foreignKey: 'parking_id',
    targetKey: 'id'
})