import { ClientShopAPI } from '@/apis/shop/index';
import { Language } from '@/types/lang';
import { API_LOCALE } from '@/app/_hooks/useTranslation';

export interface GetCategoriesResponseTypes {
  is_rocket: boolean; // Is rocket
  is_free_shipping: boolean; // Is free shipping
  product_id: number; // Product id
  product_image: string; // Product image, minLength: 1
  product_name: string; // Product name, minLength: 1
  product_price: string; // Product price, minLength: 1
  product_url: string; // Product url, minLength: 1
  product_price_currency: string; // Product price currency, minLength: 1
  category_name: string; // Category name, minLength: 1
}
export interface GetCategoriesRequestTypes {
  id: string;
  language: API_LOCALE;
}

const getItemByCategory = async ({ id, language }: GetCategoriesRequestTypes) => {
  const res = await ClientShopAPI.get(`/categories/${id}/goods/`)
    .params({ language })
    .build()
    .call<GetCategoriesResponseTypes[]>();
  return res.data;
};

export default getItemByCategory;
