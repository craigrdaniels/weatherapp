import { getCity, getWeather } from './displayWeatherData';

describe('test weather data is loaded from api and displayed', () => {

  test('fetch called for city coords', async () => {
    global.fetch = jest.fn(() => {
      Promise.resolve();
    });
    const value = await getCity('Test');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(value).toBe(false);
  });

  test('fetch called for weather data', async () => {
    global.fetch = jest.fn(() => {
      Promise.resolve();
    });
    await getWeather('Test');
    expect(fetch).toHaveBeenCalledTimes(1);
   // expect(value).toBe(false);
  });


});