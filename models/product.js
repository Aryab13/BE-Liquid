import { DataTypes } from "sequelize";
import sequelize from "../confiq/database.js";

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gambar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stok: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Product;
