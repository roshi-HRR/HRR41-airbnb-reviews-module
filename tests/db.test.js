const puppeteer = require ('puppeteer');
const pageURL = 'https://localhost:3000/';
const models = require('../database/model.js');
const seeder = require('../database/db-seed.js');

//db:
  //test connection

  //reset function
  //accessOneHouse
  //addOneHouse
  //addOneReview
//server
  //test

/////////////////

//const db = require('../database/db.js');
//
// test("title", () => {
//   const value = runFunc();
//   expect(value).toBe(true);
// })
//does my reset func reset my db
  //does finding a function return null
//does my accessOneHouse return a house if I pass it the id
  //
//addOneHouse
  //does it


//seeder (so I can test jest)
test('randomNum creates a random number', () => {
  expect(seeder.randomNum(3,50)).toBeGreaterThan(2);
  expect(seeder.randomNum(3,50)).toBeLessThan(51);
})
