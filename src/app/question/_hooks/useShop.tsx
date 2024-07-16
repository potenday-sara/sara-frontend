import { useEffect, useRef, useState } from 'react';
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
};

const useShop = () => {
  const [nowCategory, setNowCategory] = useState<Category>({
    id: '',
    label: '',
  });
  const [keyword, setKeyword] = useState('');
  const { nowPage, setNowPage, setNextPage, setPrevPage, setMaxPage, maxPage } = usePage();
  const [items, setItems] = useState([]);
  const [itemLoading, setItemLoading] = useState({});

  const { data: categories, isLoading: categoryLoading } = useCategory();
  const { data: categoryItem, isLoading: categoryItemLoading } = useItemsByCategory({
    id: nowCategory.id,
    language: 'KO',
  });

  useEffect(() => {
    if (categories) {
      setNowCategory(categories[0]);
    }
  }, [categories]);

  // const { data: keywordItem, isLoading: keywordLoading } = useQuery({
  //   queryKey: ['CoupangItemsByKeyword', keyword],
  //   queryFn: () => getItemsByKeyword(keyword, setMaxPage),
  //   staleTime: Infinity,
  // });

  const showingData = (items || []).slice((nowPage - 1) * 4, nowPage * 4);

  return {
    categories,
    categoryLoading,
    nowCategory,
    showingData,
    itemLoading,
    nowPage,
    setNextPage,
    setPrevPage,
    maxPage,
  };

  // return { Ca };
};

export default useShop;
