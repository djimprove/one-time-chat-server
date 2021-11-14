const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [authenticate('jwt')],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [(d) => console.log(d)],
    update: [],
    patch: [],
    remove: []
  }
};
