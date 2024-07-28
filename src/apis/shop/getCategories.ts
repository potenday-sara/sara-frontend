import { Theme } from '@/feature/question/ThemeContext';
import { ClientShopAPI } from '@/apis/shop/index';

export interface GetCategoriesResponseTypes {
  id: string;
  code: string;
  type: string;
  name: string;
}

const getCategories = async () => {
  const response = await ClientShopAPI.get(`/categories/`).build().call<GetCategoriesResponseTypes[]>();

  return response.data;
};

export default getCategories;
