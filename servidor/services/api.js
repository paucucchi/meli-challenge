const axios = require('axios');
const isEmpty = require('lodash/isEmpty');
const get = require('lodash/get');

const api = {
  endpoint: 'http://api.mercadolibre.com',
  author: {
    'name': 'Paula',
    'lastname': 'Cucchi'
  },

  async getItems(query) {
    if(!query) throw new Error('Query param is required.');
    const params = {
      q: query,
      limit: 4
    }
    const { data } = await axios.get(`${this.endpoint}/sites/MLA/search`, { params });
    return api.parseListOfItems(data);
  },

  async getItemDetails(id) {
    if(!id) throw new Error('Item ID is required.');
    const { data } = await axios.get(`${this.endpoint}/items/${id}`);
    return api.parseItemDetails(data);
  },

  async getItemDescription(id) {
    if(!id) throw new Error('Item ID is required.');
    return await axios.get(`${this.endpoint}/items/${id}/description`).
      then(response => get(response, 'data.plain_text', 'Descripción no disponible.')).
      catch(error => { return 'Descripción no disponible.' });
  },

  async getCategoriesPath(id) {
    if(!id) throw new Error('Category ID is required.');
    return await axios.get(`${this.endpoint}/categories/${id}`).
    then(response => get(response, 'data.path_from_root', [])).
    catch(error => { return []; });
  },

  async parseListOfItems(data) {
    const { results, filters, available_filters } = data;
    if(isEmpty(results)) throw new Error('No results found.');
    // Get categories path
    const categoryFilter = filters.filter(element => element.id === 'category');
    let category = get(categoryFilter, '0.values.0');
    if(!category) {
      // Find category with max results if doesn't exits category filter
      const categoryAvailableFilter = available_filters.filter(element => element.id === 'category');
      const categoriesResults = get (categoryAvailableFilter, '0.values');
      category = categoriesResults.reduce(
        (prev, current) => (prev.results > current.results) ? prev : current
      );
    }
    const categories = await api.parseCategoriesPath(category.id);
    // Get items data
    const items = results.map((item) => {
      const { state_name } = item.address;
      return {
        ...api.parseItem(item),
        picture: item.thumbnail,
        state: state_name
      };
    });
    return {
      author: this.author,
      categories,
      items,
    };
  },

  async parseItemDetails(data) {
    if(!data) throw new Error('Api data is missing.');
    // Get categories path
    const categories = await api.parseCategoriesPath(data.category_id);
    // Get description
    const description = await api.getItemDescription(data.id);
    // Get item data
    const { url } = data.pictures[0];
    const item = {
      ...api.parseItem(data),
      picture: url,
      sold_quantity: data.sold_quantity,
      description
    }
    return {
      author: this.author,
      categories,
      item,
    };
  },

  parseItem(data) {
    const { free_shipping } = data.shipping;
    const { currency_id } = data;
    let { price } = data;
    price = api.parsePrice({ currency_id, price });
    return {
      id: data.id,
      title: data.title,
      price,
      condition: data.condition,
      free_shipping
    };
  },

  parsePrice({ currency_id, price }) {
    let [amount, decimals] = price.toString().split('.');
    if(!decimals) decimals = '0';
    return {
      currency: currency_id,
      amount: parseInt(amount),
      decimals: parseInt(decimals)
    };
  },

  async parseCategoriesPath(id) {
    if(!id) throw new Error('Category ID is required.');
    const path = await api.getCategoriesPath(id);
    const categories = path.map(element => element.name);
    return categories;
  }

}

module.exports = api;
