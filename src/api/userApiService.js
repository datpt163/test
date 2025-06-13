import axios from 'axios';

const BASE_URL = 'https://run.mocky.io/v3';

export const useApiService = () => {
  const getUsers = async (params = {}) => {
    const response = await axios.get(`${BASE_URL}/b7fa8cc4-3bbb-481c-9ab1-e317dfdda71d`, { params });
    return response.data;
  };

  const createUser = async (payload) => {
    const response = await axios.post(`${BASE_URL}/user`, payload);
    return response.data;
  };

  const updateUser = async (id, payload) => {
    const response = await axios.put(`${BASE_URL}/user/${id}`, payload);
    return response.data;
  };

  const deleteUser = async (id) => {
    const response = await axios.delete(`${BASE_URL}/user/${id}`);
    return response.data;
  };

  return {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  };
};
