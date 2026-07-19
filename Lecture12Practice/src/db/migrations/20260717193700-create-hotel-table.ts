 
// import { create } from "node:domain";
import { QueryInterface } from "sequelize"
 

// module.exports = {
//   async up (queryInterface: QueryInterface) {
//       await queryInterface.createTable('hotels',{
//         id: {
//           type: 'INTEGER',
//           autoIncrement:true,
//           primaryKey: true,
//           allowNull: false,
//         },
//         name: {
//           type : 'VARCHAR(255)',
//           allowNull: false,
//         },
//         location:{
//           type: 'VARCHAR(255)',
//           allowNull: false,

//         },
//         rating:{
//           type: 'FLOAT',
//           allowNull: false,
//         },
//         createdAt:{
//           type: 'timeStamp',
//           allowNull: false,
//           defaultValue: new Date()
//         },
//         updateAt:{
//           type: 'timeStamp',
//           defaultValue: new Date(),
//           allowNull: false,
//         }
//       });
//   },
 

module.exports = {
  async up(queryInterface: { sequelize: { query: (arg0: string) => any; }; }) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS hotels (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          ON UPDATE CURRENT_TIMESTAMP
      );
    `);
  },

  async down(queryInterface: { sequelize: { query: (arg0: string) => any; }; }) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS hotels;
    `);
  }
};
