import * as api from './api';
import request from './request';


// 品牌下品类列表
export const fetchBrandCategories = (data) => {
  return request.get(api.brand_categories, data );
};
