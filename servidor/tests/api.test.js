const faker = require('faker');
const axios = require('axios');
jest.mock('axios');
const api = require('../services/api');
const { 
  getItemsResponse,
  getCategoriesPathResponse,
  getItemDetailsResponse,
  getItemDescriptionResponse
 } = require('./utils/responseExample');


describe('== Api Mercado Libre ==', () => {
  const randomQuery = faker.lorem.word();
  const randomId = faker.random.alphaNumeric(7);
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('== getItems function ==', () => {
    beforeEach(() => {
      const mockGetItemsResponse = {data: getItemsResponse()};
      const mockGetCategoriesPathResponse = {data: getCategoriesPathResponse()};
      axios.get.mockResolvedValueOnce(mockGetItemsResponse);
      axios.get.mockResolvedValueOnce(mockGetCategoriesPathResponse);
    })
    test('It should returns author, categories and items properties', async () => {
      const response = await api.getItems(randomQuery);
      expect(response).toHaveProperty('author');
      expect(response).toHaveProperty('categories');
      expect(response).toHaveProperty('items');
    });
    test('Author property should return a name and a lastname', async () => {
      const response = await api.getItems(randomQuery);
      expect(response).toHaveProperty('author');
      expect(response.author).toHaveProperty('name');
      expect(response.author).toHaveProperty('lastname');
    });
    test('Categories property should return an object', async () => {
      const response = await api.getItems(randomQuery);
      expect(typeof response.categories).toBe('object');
      expect(response.categories).not.toBeNull();
      expect(response.categories).not.toBeUndefined();
    });
    test('Items should contain 4 items', async () => {
      const response = await api.getItems(randomQuery);
      expect(response.items).toHaveLength(4);
    });
  });
  describe('== getItemDetails function ==', () => {
    beforeEach(() => {
      const mockGetItemDetailsResponse = {data: getItemDetailsResponse()};
      const mockGetCategoriesPathResponse = {data: getCategoriesPathResponse()};
      const mockGetItemDescriptionResponse = {data: getItemDescriptionResponse()};
      axios.get.mockResolvedValueOnce(mockGetItemDetailsResponse);
      axios.get.mockResolvedValueOnce(mockGetCategoriesPathResponse);
      axios.get.mockResolvedValueOnce(mockGetItemDescriptionResponse);
    })
    test('It should returns author, categories and item properties', async () => {
      const response = await api.getItemDetails(randomId);
      expect(response).toHaveProperty('author');
      expect(response).toHaveProperty('categories');
      expect(response).toHaveProperty('item');
    });
    test('Author property should return a name and a lastname', async () => {
      const response = await api.getItemDetails(randomId);
      expect(response).toHaveProperty('author');
      expect(response.author).toHaveProperty('name');
      expect(response.author).toHaveProperty('lastname');
    });
    test('Categories property should return an object', async () => {
      const response = await api.getItemDetails(randomId);
      expect(typeof response.categories).toBe('object');
      expect(response.categories).not.toBeNull();
      expect(response.categories).not.toBeUndefined();
    });
  });
  describe('== getItemDescription function ==', () => {
    test('It should return a message if the plain_text is missing', async () => {
      axios.get.mockResolvedValueOnce({ plain_text: '' })
      const response = await api.getItemDescription(randomId);
      expect(response).toEqual('Descripción no disponible.');
    });
    test('It should return a message if request fails', async () => {
      axios.get.mockRejectedValueOnce();
      const response = await api.getItemDescription(randomId);
      expect(response).toEqual('Descripción no disponible.');
    });
  });
  describe('== getCategoriesPath function ==', () => {
    test('It should return an empty array if request fails', async () => {
      axios.get.mockRejectedValueOnce();
      const response = await api.getCategoriesPath(randomId);
      expect(response).toEqual([]);
    });
  });
  describe('== parseListOfItems function ==', () => {
    test('It should return categories without filters data', async () => {
      const mockGetCategoriesPathResponse = {data: getCategoriesPathResponse()};
      axios.get.mockResolvedValueOnce(mockGetCategoriesPathResponse);
      const dataExample = getItemsResponse();
      dataExample.filters = [];
      const response = await api.parseListOfItems(dataExample);
      expect(response).toHaveProperty('categories');
    });
    test('It should return an error if results data is missing', async () => {
      const dataExample = {
        filters: [],
        available_filters: []
      };
      const response = api.parseListOfItems(dataExample);
      expect(response).rejects.toThrow('No results found.');
    });
  });
  describe('== parsePrice function ==', () => {
    test('It should return currency, amount and decimals values', () => {
      const currency_id = 'ARS';
      const price = 1234.56;
      const response = api.parsePrice({ currency_id, price });
      expect(response).toEqual({ currency: 'ARS', amount: 1234, decimals: 56 });
    });
  });
  describe('== Throw errors ==', () => {
    describe('== getItems function ==', () => {
      test('It should return an error if query param is missing', async () => {
        axios.get.mockRejectedValueOnce();
        expect(api.getItems()).rejects.toThrow('Query param is required.');
      });
    });
    describe('== getItemDetails function ==', () => {
      test('It should return an error if id param is missing', async () => {
        axios.get.mockRejectedValueOnce();
        expect(api.getItemDetails()).rejects.toThrow('Item ID is required.');
      });
    });
    describe('== getItemDescription function ==', () => {
      test('It should return an error if id param is missing', async () => {
        axios.get.mockRejectedValueOnce();
        expect(api.getItemDescription()).rejects.toThrow('Item ID is required.');
      });
    });
    describe('== getCategoriesPath function ==', () => {
      test('It should return an error if category id param is missing', async () => {
        axios.get.mockRejectedValueOnce();
        expect(api.getCategoriesPath()).rejects.toThrow('Category ID is required.');
      });
    });
    describe('== parseItemDetails function ==', () => {
      test('It should return an error if Api data is missing', async () => {
        axios.get.mockRejectedValueOnce();
        expect(api.parseItemDetails()).rejects.toThrow('Api data is missing.');
      });
    });
    describe('== parseCategoriesPath function ==', () => {
      test('It should return an error if Category ID is missing', async () => {
        axios.get.mockRejectedValueOnce();
        expect(api.parseCategoriesPath()).rejects.toThrow('Category ID is required.');
      });
    });
  });
});
