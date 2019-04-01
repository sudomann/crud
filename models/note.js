'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    author: DataTypes.STRING,
    date: DataTypes.STRING,
    text: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
  };
  return Note;
};