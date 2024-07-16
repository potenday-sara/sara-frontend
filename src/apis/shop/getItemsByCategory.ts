import { ClientShopAPI } from '@/apis/shop/index';
import { Language } from '@/types/lang';

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
  language: Language;
}

const getItemByCategory = ({ id, language }: GetCategoriesRequestTypes) =>
  ClientShopAPI.get(`/categories/${id}/goods/`).params({ language }).build().call<GetCategoriesResponseTypes>();

export default getItemByCategory;
