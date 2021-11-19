module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Heros', [
      {
        name: 'Зашкварли Quinn',
        superpower: 'Не воровка ...',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'FatMan',
        superpower: 'Сахарный диабет',
        UserId: '1',   
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Вжух',
        superpower: 'Быстрее всех бежит за пивком',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        name: 'MrЧесотка',
        superpower: 'Оксана (ногти) +7964******',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Челопук',
        superpower: 'Видит в темноте,но только еду',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Скочмэн',
        superpower: 'Андэfinded',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'СеньорСутенер ',
        superpower: 'Брат Хью Хефнера',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Вандермян',
        superpower: 'Красиво делает',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Heros', null, {});
  },
};
