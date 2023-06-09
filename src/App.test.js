import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App';


const mock = new MockAdapter(axios);

const responseData = [
  {"file":"test1.csv","lines":[]},
  {"file":"test2.csv","lines":[{"file":"test2.csv","text":"xtWheSDnwEgC","number":523,"hex":"cefc7d2d83ba8f92cf86521ced513c1b"}]},
  {"file":"test3.csv","lines":[{"file":"test3.csv","text":"CGtoKvEyLBwcJRaicvQZCpRG","number":768182033,"hex":"7a063498520371110a61bb5abe0b5e29"},{"file":"test3.csv","text":"kJ","number":195,"hex":"6517a4f9fe277e72b611c9a3fe03f429"},{"file":"test3.csv","text":"EjsCxldSVuVbfteOMQhyEuqen","number":961,"hex":"861e9644f3e518da6319532381615542"}]},
  {"file":"test18.csv","lines":[]},
  {"file":"test4.csv","lines":[]},
  {"file":"test5.csv","lines":[]},
  {"file":"test6.csv","lines":[]},
  {"file":"test9.csv","lines":[{"file":"test9.csv","text":"MldusqwjBqDwxpfkslSiv","number":27,"hex":"0726227230639d391647e761b3bfe6ed"},{"file":"test9.csv","text":"xqwaQFBfsAnTPhnSYJhouotphnhq","number":9,"hex":"f1b4113f7e45ceec3d9b6a44e378efa1"},{"file":"test9.csv","text":"FWZsaDgSmkpJwJdcEPElkrs","number":99423094,"hex":"1b55eff0b6e91bb0ea94267454291cdc"},{"file":"test9.csv","text":"unccYDGEGOGUxGZrQIOVjkLHQxk","number":618325629,"hex":"c71c0f53ba7522cb4978ae3c59dbd5d9"},{"file":"test9.csv","text":"MnCSHiRAyaiCNWNhHHZvaLtn","number":2,"hex":"aa73d0e06e2f32d364baa9402e6d4646"},{"file":"test9.csv","text":"QQYOkVIBlNNq","number":4,"hex":"3d17c13cbac60bc69ce062e9251f3dbe"},{"file":"test9.csv","text":"pWMVfFvtus","number":85,"hex":"f7d0c7ac723286c455a4071f21ede852"},{"file":"test9.csv","text":"SBMeKfXYumzFw","number":4049,"hex":"36d148f057170be5ef67a688338b8dc5"},{"file":"test9.csv","text":"saEpvOfx","number":5,"hex":"f20ecfe546d0c3268796fef55b820824"},{"file":"test9.csv","text":"TKU","number":735394,"hex":"e23232bfdaaa459e68b3b4618fabbd64"},{"file":"test9.csv","text":"nbeY","number":50907004,"hex":"92563532bdce75bebe20ae39c8c0ea9e"}]},
  {"file":"test15.csv","lines":[]}
];

beforeEach(() => {

  mock.onGet('http://localhost:3000/files/data').reply(200, responseData);
});

afterEach(() => {

  mock.reset();
});

test('renders table with data', async () => {
  render(<App />);


  await screen.findByText('test1.csv');
  await screen.findByText('test2.csv');
  await screen.findByText('test3.csv');
  await screen.findByText('test9.csv');


  expect(screen.getByText('test1.csv')).toBeInTheDocument();
  expect(screen.getByText('test2.csv')).toBeInTheDocument();
  expect(screen.getByText('test3.csv')).toBeInTheDocument();
  expect(screen.getByText('test9.csv')).toBeInTheDocument();
});