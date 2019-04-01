'use strict';

module.exports = {  
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Notes', [{
      author: 'Willy Njundong',
      date: '4/1/2019',
      text: 'Lorem Ipsum Dolor notes la di dah',
      email: 'will@gmail.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      author: 'Zach Holochwost',
      date: 'Monday',
      text: 'Hello World',
      email: 'email@something.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      author: 'Zach Holochwost',
      date: 'Thursday',
      text: 'Testing',
      email: 'somebody@someone.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },{
      author: 'Zach',
      date: '4/1/2019',
      text: 'Lorem Ipsum Dolor notes la di dah',
      email: 'zach@email.edu',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Notes', null, {});
  }
};
