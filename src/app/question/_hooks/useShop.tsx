import { useEffect, useMemo, useRef, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useCategory, useItemsByCategory } from '@/app/question/_query/useShopQuery';

const usePage = () => {
  const [nowPage, setNowPage] = useState(1);
  const [maxPage, setMaxPage] = useState(8);

  const setNextPage = () => {
    if (nowPage + 1 <= maxPage) setNowPage((prev) => prev + 1);
  };

  const setPrevPage = () => {
    if (nowPage - 1 >= 1) setNowPage((prev) => prev - 1);
  };

  return { nowPage, setNowPage, setNextPage, setPrevPage, setMaxPage, maxPage };
};

type Category = {
  id: string;
  label: string;
  code: string;
};

const useShop = () => {
  const [nowCategory, setNowCategory] = useState<Category>({
    id: '',
    label: '',
    code: '',
  });
  const [keyword, setKeyword] = useState('');
  const { nowPage, setNowPage, setNextPage, setPrevPage, setMaxPage, maxPage } = usePage();
  const [items, setItems] = useState([]);
  const [itemLoading, setItemLoading] = useState({});

  const { data: categories, isLoading: categoryLoading } = useCategory();
  const { data: categoryItems, isLoading: categoryItemLoading } = useItemsByCategory({
    id: nowCategory.id,
    language: 'KO',
  });

  const displayItems = useMemo(() => {
    // 페이지당 4개씩 보여주기
    if (categoryItems) {
      return categoryItems.slice((nowPage - 1) * 4, nowPage * 4);
    }
    return [];
  }, [categoryItems, nowPage]);

  useEffect(() => {
    if (categories) {
      // 카테고리중 랜덤으로 하나 선택
      const randomIndex = Math.floor(Math.random() * categories.length);
      setNowCategory({
        id: categories[randomIndex].id,
        label: categories[randomIndex].name,
        code: categories[randomIndex].code,
      });
    }
  }, [categories]);

  // const { data: keywordItem, isLoading: keywordLoading } = useQuery({
  //   queryKey: ['CoupangItemsByKeyword', keyword],
  //   queryFn: () => getItemsByKeyword(keyword, setMaxPage),
  //   staleTime: Infinity,
  // });

  const handleCategoryChange = (category: Category) => {
    console.log('why');
    setNowCategory(category);
    setNowPage(1);
  };

  return {
    handleCategoryChange,
    categories,
    categoryItems,
    displayItems,
    categoryLoading,
    nowCategory,
    itemLoading,
    nowPage,
    setNextPage,
    setPrevPage,
    maxPage,
  };

  // return { Ca };
};

export default useShop;
