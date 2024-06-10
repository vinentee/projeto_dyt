const sequelize = require('../db');
const User = require('./User');
const List = require('./List');
const Task = require('./Task');

User.hasMany(List, { foreignKey: 'id_usuario' });
List.belongsTo(User, { foreignKey: 'id_usuario' });

List.hasMany(Task, { foreignKey: 'id_lista' });
Task.belongsTo(List, { foreignKey: 'id_lista' });

sequelize.sync({ force: true }) // Use { force: true } apenas para desenvolvimento
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Error syncing database', err));

module.exports = { User, List, Task };
