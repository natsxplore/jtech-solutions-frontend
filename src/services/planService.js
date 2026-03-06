import api from './api';

const ENDPOINT = '/plans';

let isFetching = false;
let activePromise = null;

export const planService = {
  getAll: async () => {
    if (isFetching && activePromise) {
        return activePromise;
    }

    isFetching = true;

    activePromise = api.get(ENDPOINT)
        .then((response) => {
            isFetching = false;
            activePromise = null;
            return response.data;
        })
        .catch((error) => {
            isFetching = false;
            activePromise = null;
            throw error;
        });

    return activePromise;
  },

  getById: async (id) => {
    const response = await api.get(`${ENDPOINT}/${id}`);
    return response.data;
  },
};

export default planService;
