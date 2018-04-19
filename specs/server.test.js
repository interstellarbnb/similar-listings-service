const request = require('request');

const url = 'http://127.0.0.1:3001';

describe('Server', () => {
  test('GET request should return 12 listings', (done) => {
    request({
      url: `${url}/listings/1`,
      method: 'GET',
    }, (error, response, body) => {
      expect(JSON.parse(body).length).toBe(12);
    });
    done();
  });

  test('GET request should not contain listing id', (done) => {
    request({
      url: `${url}/listings/1`,
      method: 'GET',
    }, (error, response, body) => {
      const bodyjson = JSON.parse(body);
      for (let i = 0; i < bodyjson.length; i += 1) {
        expect(bodyjson[i].id).not.toBe(1);
      }
    });
    done();
  });

});
