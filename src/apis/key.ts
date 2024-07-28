import { GetQuestionListRequestTypes } from '@/apis/question/getQuestionList';

export const KEYS = {
  QUESTION: ({ limit, order, type }: Omit<GetQuestionListRequestTypes, 'offset'>) => {
    const keys = ['QUESTION', limit, order, type];
    return {
      key: keys,
    };
  },
  SHOP: () => {
    const keys = ['SHOP'];
    return {
      CATEGORIES() {
        keys.push('CATEGORIES');
        return {
          key: keys,
        };
      },
      ITEMS_BY_CATEGORY(categoryId: string) {
        keys.push('ITEMS_BY_CATEGORY');
        keys.push(categoryId);
        return {
          key: keys,
        };
      },
      ITEMS_BY_SEARCH(search: string) {
        keys.push('ITEMS_BY_SEARCH');
        keys.push(search);
        return {
          key: keys,
        };
      },
      ITEMS_BY_KEYWORD(keyword: string) {
        keys.push('ITEMS_BY_KEYWORD');
        keys.push(keyword);
        return {
          key: keys,
        };
      },
    };
  },
};
