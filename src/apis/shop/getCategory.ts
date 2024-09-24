import { ClientShopAPI } from '@/apis/shop/index';

export interface GetCategoriesResponseTypes {
  id: string;
  code: string;
  type: string;
  name: string;
}
export interface GetCategoriesRequestTypes {
  language: string;
  id: string;
}

const getCategory = (id: GetCategoriesRequestTypes) =>
  ClientShopAPI.get(`/categories/${id}/`).build().call<GetCategoriesResponseTypes>();

export default getCategory;
