const app = require('../../src/app');

describe('\'Messages\' service', () => {
  it('registered the service', () => {
    const service = app.service('messages');
    expect(service).toBeTruthy();
  });
});
