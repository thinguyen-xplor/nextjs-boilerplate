import axios from 'axios';

/**
 * Types
 */

interface GetParams {
  [key: string]: string | number | boolean;
}

interface AxiosReturn {
  status: number;
  data: any;
}

/**
 * Handle
 */

const getBaseConfig = () => ({
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  get: (url: string, params?: GetParams): Promise<AxiosReturn> => {
    const config = {
      params: params || {},
      ...getBaseConfig(),
    };

    return axios.get(url, config);
  },
};
