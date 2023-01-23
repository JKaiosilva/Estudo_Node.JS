const Sequelize = require('sequelize')

  // Conexão com o banco de dados Mysql    
  const sequelize = new Sequelize('postapp', 'root', '1234', {
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}