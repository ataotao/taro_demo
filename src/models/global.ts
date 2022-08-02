import { request } from '../service/request';
import msg from '../utils/msg';

export default {
  namespace: 'global',
  state: {
    BRAND: {},
    CATEGORIES: [],
    MINE: {}
  },
  effects: {
    *fetchLoginWeappMember({ payload }, { all, call, put }) {
      const res = yield call(request, {
        fnName: 'fetchLoginWeappMember'
      });
      if (res.code === 0) {
        console.log(res);
      } else {
        msg.fail(res.code);
      }
    },
    *fetchBrandCategories({ payload }, { all, call, put }) {
      const res = yield call(request, {
        fnName: 'fetchBrandCategories'
      });
      if (res.code === 0) {
        yield put({
          type: 'updateBrand',
          payload: res.data
        });
        yield put({
          type: 'updateCategories',
          payload: res.data.brand_categories || []
        });
      } else {
        msg.fail(res.code);
      }
    }
  },
  
  reducers: {
    updateBrand(state, { payload }) {
      return { ...state, BRAND: payload || {} };
    },
    updateCategories(state, { payload }) {
      return { ...state, CATEGORIES: payload || [] };
    }
  }
};
