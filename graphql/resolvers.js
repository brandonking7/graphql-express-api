let idCount = 0;
const zombies = [];

module.exports = {
  Query: {
    zombies: () => zombies
  },
  Mutation: {
    addZombie: (parent, args) => {
      const zombie = {
        id: `${idCount++}`,
        zoneName: args.zoneName,
        zombieType: args.zoneName
      };
      zombies.push(zombie);

      return zombie;
    },
    updateZombie: (parent, args) => {
      const zoneList = JSON.parse(args.zoneList);
      if (zoneList) {
        zoneList.map((zombieFromList, index) => {
          const zombieIndex = zombies.findIndex(
            zombie => zombie.id === zombieFromList.id
          );
          zombies[zombieIndex].zoneName = args.zoneName;
          zombies[zombieIndex].zoneIndex = index;
          return zombies[zombieIndex];
        });
      }
    }
  }
};
