const db = require('./db');
const Proprietario = db.sequelize.define('proprietario', {
    id_proprietario: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: db.Sequelize.TEXT
    },
    cpf: {
        type: db.Sequelize.TEXT
    }
}, { freezeTableName: true });
//Proprietario.sync({ force: true });
module.exports = Proprietario;