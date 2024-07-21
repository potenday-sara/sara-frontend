import { ClientShopAPI } from '@/apis/shop/index';
import { Language } from '@/types/lang';
import { GetCategoriesResponseTypes } from '@/apis/shop/getCategory';

export interface GetSearchItemRequestTypes {
  keyword: string;
  language: Language;
}

const getItemByKeyword = async ({ keyword, language }: GetSearchItemRequestTypes) => {
  const res = await ClientShopAPI.get(`/search/`)
    .params({ language, keyword })
    .build()
    .call<GetCategoriesResponseTypes[]>();
  return res.data;
};

export default getItemByKeyword;
