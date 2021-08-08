const faker = require('faker');

function getItemsResponse() {
  // Results response (4 items)
  const results = [];
  for (let i = 0; i < 4; i++) {
    results.push({
      id: faker.random.alphaNumeric(7),
      title: faker.lorem.words(),
      price: faker.datatype.number(),
      currency_id: faker.finance.currencyCode(),
      sold_quantity: faker.datatype.number(),
      condition: faker.lorem.word(),
      thumbnail: faker.image.imageUrl(),
      address: {
        state_name: faker.address.city()
      },
      shipping: {
        free_shipping: faker.datatype.boolean()
      },
      category_id: faker.random.alphaNumeric(7)
    });
  }

  // Categories - filters
  const filters = [{
    id: 'category',
    name: 'Categorías',
    values: [{
      id: faker.lorem.words(),
      name: faker.lorem.words(),
      path_from_root: [{
        id: faker.lorem.words(),
        name: faker.lorem.words()
      }, {
        id: faker.lorem.words(),
        name: faker.lorem.words()
      }]
    }]
  }];

  // Categories - available filters values
  const filtersValues = [];
  for (let i = 0; i < 4; i++) {
    filtersValues.push({
      id: faker.random.alphaNumeric(7),
      name: faker.lorem.words(),
      results: faker.datatype.number(),
    });
  }
  const available_filters = [{
    id: 'category',
    name: 'Categorías',
    values: filtersValues,
  }];

  // Response
  return {
    results,
    filters,
    available_filters,
  };
}

function getItemDetailsResponse() {
  return {
    id: faker.random.alphaNumeric(7),
    title: faker.lorem.words(),
    category_id: faker.random.alphaNumeric(7),
    price: faker.datatype.number(),
    currency_id: faker.finance.currencyCode(),
    sold_quantity: faker.datatype.number(),
    condition: faker.lorem.word(),
    pictures: [{
        id: faker.random.alphaNumeric(7),
        url: faker.image.imageUrl(),
    }],
    shipping: {
      free_shipping: faker.datatype.boolean()
    },
  }
}

function getCategoriesPathResponse() {
  return {
    id: faker.random.alphaNumeric(7),
    name: faker.lorem.words(),
    path_from_root: [
      {
        id: faker.random.alphaNumeric(7),
        name: faker.lorem.words()
      },
      {
        id: faker.random.alphaNumeric(7),
        name: faker.lorem.words()
      }
    ]
  }
}

function getItemDescriptionResponse() {
  return {
    plain_text: faker.lorem.paragraph(),
  }
}

module.exports = { 
  getItemsResponse,
  getCategoriesPathResponse,
  getItemDetailsResponse,
  getItemDescriptionResponse
};
