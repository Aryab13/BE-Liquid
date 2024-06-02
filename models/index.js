import sequelize from "../confiq/database.js";
import User from "./user.js";
import Product from "./product.js";

const db = {
  sequelize,
  User,
  Product,
};

export { sequelize, User, Product };
