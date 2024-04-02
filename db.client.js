const { Sequelize } = require("sequelize");

// database
const sequelize = new Sequelize(
  "postgres://esgi_cloud_exam_2_database_98758_user:hYrETwPNkzLnpQCWZOPTFdJGKsVH7Vij@dpg-co60bjev3ddc73986log-a.frankfurt-postgres.render.com/esgi_cloud_exam_2_database_98758", // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

// authentication and synchronization
sequelize
  .authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() =>
    console.log(
      "Cannot connect to database, please check environment credentials"
    )
  );

module.exports = sequelize;
