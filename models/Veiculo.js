const db = require('./db');
const Veiculo = db.sequelize.define('veiculo', {
    id_veiculo: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    placa: {
        type: db.Sequelize.TEXT
    },
    ano: {
        type: db.Sequelize.INTEGER
    },
    mensalidade: {
        type: db.Sequelize.DECIMAL(10, 2)
    },
    fk_proprietario: {
        type: db.Sequelize.INTEGER,
        references: { model: 'Proprietario', key: 'id_proprietario' },
        onDelete: 'CASCADE',
        allowNull: false,
    }
}, { freezeTableName: true });
//Veiculo.sync({ force: true });
module.exports = Veiculo;