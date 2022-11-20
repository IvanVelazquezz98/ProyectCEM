const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
    // defino el modelo
    sequelize.define("estudio", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        priority:{
          type: DataTypes.STRING,
            allowNull: false,
        },
        
        files:{
          type: DataTypes.TEXT,
            allowNull: false,
        },
        
        timeStamp:{
          type: DataTypes.STRING,
            allowNull: false,
        }
    });
};
