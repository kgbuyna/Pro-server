import { Sequelize } from "sequelize";


const sequelize = new Sequelize("main-pro","postgres", process.env.PG_PASSWORD, {
    dialect: "postgres",  
    host: "localhost"
});

const assertDatabaseConnectionOk = async ()=> {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log(process.env);
    // setupAssociations();
    sequelize.sync({ alter: true });
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error)
    process.exit(1);
  }
};

export { sequelize, assertDatabaseConnectionOk };