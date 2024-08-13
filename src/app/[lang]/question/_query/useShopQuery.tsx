import { useQuery } from '@tanstack/react-query';
import { KEYS } from '@/apis/key';
import getCategories from '@/apis/shop/getCategories';
import getItemByCategory, { GetCategoriesRequestTypes } from '@/apis/shop/getItemsByCategory';
import getItemsByKeyword, { GetSearchItemRequestTypes } from '@/apis/shop/getItemsByKeyword';
import { API_LOCALE } from '@/app/_hooks/useTranslation';

export const useCategory = (language: API_LOCALE) => {
  return useQuery({
    queryKey: KEYS.SHOP().CATEGORIES(language).key,
    queryFn: () => getCategories(language),
  });
};

export const useItemsByCategory = ({ id, language }: GetCategoriesRequestTypes) => {
  return useQuery({
    queryKey: KEYS.SHOP().ITEMS_BY_CATEGORY(id).key,
    queryFn: () => getItemByCategory({ id, language }),
    enabled: !!id,
  });
};

export const useItemsByKeyword = ({ keyword, language }: GetSearchItemRequestTypes) => {
  return useQuery({
    queryKey: KEYS.SHOP().ITEMS_BY_KEYWORD(keyword).key,
    queryFn: () => getItemsByKeyword({ keyword, language }),
    enabled: !!keyword,
  });
};
