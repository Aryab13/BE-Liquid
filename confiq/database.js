import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DB_NAME || "liquid", process.env.DB_USER || "root", process.env.DB_PASSWORD || "", {
  host: process.env.DB_HOST || "localhost",
  dialect: "mysql",
  port: process.env.DB_PORT || 3306,
});

export default sequelize;
