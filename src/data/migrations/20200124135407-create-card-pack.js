module.exports = {
  up: queryInterface => {
    const suites = [
      ['diamonds', '♦️'],
      ['hearts', '♥️'],
      ['spades', '♠️️'],
      ['clubs', '♦️️'],
    ];

    const rankResolver = rank => {
      const rankResolvers = { 11: 'J', 12: 'Q', 13: 'K', 1: 'A' };
      return rankResolvers[rank] || rank;
    };

    const cards = suites.flatMap(([suit, emoji]) =>
      Array.from({ length: 13 }, (_, i) => {
        const rank = i + 1;
        const label = emoji + rankResolver(rank);
        return { rank, suit, label };
      })
    );
    return queryInterface.bulkInsert('Card', cards);
  },
  down: queryInterface => queryInterface.sequelize.query(`TRUNCATE "Card"`),
};
