const request = require('request');
// const { Listing } = require('../database/db.js');

const url = 'http://ec2-18-218-192-170.us-east-2.compute.amazonaws.com';

describe('Server', () => {
  test('GET request should return 12 listings', (done) => {
    request({
      url: `${url}/similarlistings/1`,
      method: 'GET',
    }, (error, response, body) => {
      if (error) {
        throw new Error(error);
      }
      expect(JSON.parse(body).length).toBe(12);
      done();
    });
  });

  test('GET request body should not contain listing id', (done) => {
    request({
      url: `${url}/similarlistings/1`,
      method: 'GET',
    }, (error, response, body) => {
      const results = JSON.parse(body);
      for (let i = 0; i < results.length; i += 1) {
        expect(results[i].id).not.toBe(1);
      }
      done();
    });
  });

  // test('Successful POST request should return 201', (done) => {
  //   const postData = {
  //     id: 101,
  //     title: 'test',
  //     price: 200,
  //     imageUrl: 'test',
  //     reviews: [4, 5, 6],
  //     avgRating: 5,
  //     type: 'Space Shuttle',
  //     bedCount: 3,
  //     city: 'San Francisco',
  //     state: 'CA',
  //     country: 'US',
  //   };
  //   request({
  //     url: `${url}/listings`,
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(postData),
  //   }, (error, response) => {
  //     if (error) {
  //       console.error('error message', error);
  //     }
  //     expect(response.statusCode).toBe(201);
  //     Listing.find({ id: 101 }).remove().exec().catch(error => console.error(error));
  //     done();
  //   });
  // });
});
