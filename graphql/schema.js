module.exports = `
  type Query {
    zombies: [Zombie!]!
    zombie(id: ID!): Zombie
  }

  type Mutation {
    addZombie(zoneName: String!, zombieType: String): Zombie
    updateZombie(id: ID!, zoneName: String!, zoneList: String): Zombie
    deleteZombie(id: ID!): Zombie
  }

  type Zombie {
    id: ID!
    zoneName: String!,
    zoneIndex: Int,
    zombieType: String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
