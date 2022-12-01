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
      type: DataTypes.STRING
 
    },

    method: {
      type: DataTypes.STRING

    },

    reference: {
      type: DataTypes.UUID

    },

    priority: {
      type: DataTypes.STRING
    },

    files: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    notes: {
      type: DataTypes.TEXT
    },
    date:{
      type: DataTypes.DATE,
      allowNull: true
    }
  });
};
