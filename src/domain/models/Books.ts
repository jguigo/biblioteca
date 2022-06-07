import { DataTypes, UUIDV4 } from "sequelize";
import { db } from "../../shared/infrastructure/database";

const Books = db.define(
   "Books",
   {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true,
         allowNull: false,
      },
      title: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      publisher: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      authors: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   },
   {
      tableName: "books",
      timestamps: false,
   }
);

export {Books};
