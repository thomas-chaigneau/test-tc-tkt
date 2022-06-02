import axios from 'axios';

const baseUrl = 'https://test.wertkt.com/api/';

type TPathOptions = 'biz' | 'result';

export interface IBusinessApiRes {
  id: number;
  name: string;
  sector: string;
  siren: number;
  results: number[];
}

const apiService = {
  get: async <T>(path: TPathOptions, params?: Record<string, any>): Promise<T> =>
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
