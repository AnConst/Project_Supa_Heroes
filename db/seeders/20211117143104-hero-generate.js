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
        image: 'https://cs11.pikabu.ru/post_img/2018/08/19/7/1534677678165150447.jpg',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'FatMan',
        superpower: 'Сахарный диабет',
        image: 'https://cdn.fishki.net/upload/post/2019/12/06/3161472/b40e56e7814b82b7cd3521f225c2acde.jpg',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Вжух',
        superpower: 'Быстрее всех бежит за пивком',
        image: 'https://pbs.twimg.com/media/Cg1flzmW0AAjNmQ?format=jpg&name=900x900',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'MrЧесотка',
        superpower: 'Оксана (ногти) +7964******',
        image: 'https://cdn.trinixy.ru/pics4/20090505/wolverine_05.jpg',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 'https://i1.sndcdn.com/avatars-000146244198-23ge5g-t500x500.jpg'

      {
        name: 'Челопук',
        superpower: 'Видит в темноте,но только еду',
        UserId: '1',
        image: 'https://resize.prod.docfr.doc-media.fr/r/1010,,forcex/img/var/doctissimo/storage/images/fr/www/famille/diaporamas/halloween-les-60-pires-costumes-reperes-sur-pinterest/spider-girl/3151103-1-fre-FR/Spider-Girl.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Скочмэн',
        superpower: 'Андэfinded',
        image: 'https://i.redd.it/97nt3m4lyda71.jpg',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'СеньорСутенер ',
        superpower: 'Брат Хью Хефнера',
        image: 'https://external-preview.redd.it/4BxvY_DKHsbWxPdDM5Mn2AGZe7YPL9T-RGmbbh2tvgQ.jpg?auto=webp&s=6ad99261de2a9b6281b54ce49ddc147dac1e1c8b',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Вандермян',
        superpower: 'Красиво делает',
        image: 'https://www.macosa.it/wp-content/uploads/2014/02/wonder-woman-peloso-600.jpg',
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
