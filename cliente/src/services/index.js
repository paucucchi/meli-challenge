import axios from 'axios';

export const getItems = async (keyword) =>{
  const params = { q: keyword };
  const { data } = await axios.get('/api/items', { params });
  return data.data;
};

export const getItemDetails = async (id) =>{
  const { data } = await axios.get(`/api/items/${id}`);
  return data.data;
};
