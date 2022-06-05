"use strict";

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Books", {
         id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
         },
         title: {
            type: Sequelize.STRING,
         },
         publisher: {
            type: Sequelize.STRING,
         },
         image: {
            type: Sequelize.STRING,
         },
         authors: {
            type: Sequelize.STRING,
         },
      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("users");
   },
};
