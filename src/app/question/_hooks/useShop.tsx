import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCategory, useItemsByCategory, useItemsByKeyword } from '@/app/question/_query/useShopQuery';
import { useQuestion } from '@/app/question/_context/QuestionContext';

const usePage = (arr: unknown[]) => {
  const [nowPage, setNowPage] = useState(1);
  const [maxPage, setMaxPage] = useState(Math.ceil(arr.length / 4));

  console.log('maxPage', maxPage);

  const handleSetNextPage = () => {
    if (nowPage + 1 <= maxPage) setNowPage((prev) => prev + 1);
  };

  const handleSetPrevPage = () => {
    if (nowPage - 1 >= 1) setNowPage((prev) => prev - 1);
  };

  return { nowPage, setNowPage, handleSetNextPage, handleSetPrevPage, setMaxPage, maxPage };
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
  const [items, setItems] = useState([]);
  const [itemLoading, setItemLoading] = useState({});

  const searchParams = useSearchParams();
  const keyword = searchParams?.get('keyword') || '';

  const { data: categories, isLoading: categoryLoading } = useCategory();
  const { data: categoryItems, isLoading: categoryItemLoading } = useItemsByCategory({
    id: nowCategory.id,
    language: 'KO',
  });
  const { data: keywordItem, isLoading: keywordLoading } = useItemsByKeyword({ keyword, language: 'KO' });

  const nowShowing = useMemo(() => keywordItem || categoryItems || [], [keywordItem, categoryItems]);

  const { nowPage, setNowPage, handleSetNextPage, handleSetPrevPage, setMaxPage, maxPage } = usePage(nowShowing);
  const displayItems = useMemo(() => {
    // 페이지당 4개씩 보여주기
    if (keywordItem) {
      setMaxPage(Math.ceil(keywordItem.length / 4));
      return keywordItem.slice((nowPage - 1) * 4, nowPage * 4);
    }

    if (categoryItems) {
      return categoryItems.slice((nowPage - 1) * 4, nowPage * 4);
    }
    return [];
  }, [categoryItems, nowPage]);

  useEffect(() => {
    setNowPage(1);
  }, [keywordItem]);

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
    setNowCategory(category);
    setNowPage(1);
  };

  return {
    handleCategoryChange,
    categories,
    categoryItems,
    displayItems,
    categoryLoading,
    hasKeyword: !!keyword,
    nowCategory,
    itemLoading,
    nowPage,
    handleSetNextPage,
    handleSetPrevPage,
    maxPage,
    keyword,
  };

  // return { Ca };
};

export default useShop;
