import { Theme } from '@/feature/question/ThemeContext';
import { ClientShopAPI } from '@/apis/shop/index';
import { API_LOCALE } from '@/app/_hooks/useTranslation';

export interface GetCategoriesRequestTypes {
  language: API_LOCALE;
}

export interface GetCategoriesResponseTypes {
  id: string;
  code: string;
  type: string;
  name: string;
}

const getCategories = async (language) => {
  const response = await ClientShopAPI.get(`/categories/?language=${language}`)
    .build()
    .call<GetCategoriesResponseTypes[]>();

  return response.data;
};

export default getCategories;
