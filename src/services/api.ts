import axios from 'axios';

const baseUrl = 'https://test.wertkt.com/api/';

type TPathOptions = 'biz' | 'result';

const apiService = {
  get: async (path: TPathOptions, params?: Record<string, any>) =>
    axios({
      method: 'get',
      url: `${baseUrl}/${path}`,
      params,
    })
    .then((response) => response.data),

  getById: async (entity: TPathOptions, id: number, params?: Record<string, any>) =>
    axios({
      method: 'get',
      url: `${baseUrl}/${entity}/${id}`,
      params,
    })
    .then((response) => response.data)
};

export default apiService;
