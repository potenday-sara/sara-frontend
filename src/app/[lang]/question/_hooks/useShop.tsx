import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCategory, useItemsByCategory, useItemsByKeyword } from '@/app/[lang]/question/_query/useShopQuery';
import { useQuestion } from '@/app/[lang]/question/_context/QuestionContext';
import { getLocale, useTranslation } from '@/app/_hooks/useTranslation';

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
  const [_, lang] = useTranslation('common');

  const searchParams = useSearchParams();
  const keyword = searchParams?.get('keyword') || '';

  const { data: categories, isLoading: categoryLoading } = useCategory(getLocale(lang));
  const { data: categoryItems, isLoading: categoryItemLoading } = useItemsByCategory({
    id: nowCategory.id,
    language: getLocale(lang),
  });
  const { data: keywordItem, isLoading: keywordLoading } = useItemsByKeyword({ keyword, language: getLocale(lang) });

  const nowShowing = useMemo(() => keywordItem || categoryItems || [], [keywordItem, categoryItems]);

  const { nowPage, setNowPage, handleSetNextPage, handleSetPrevPage, setMaxPage, maxPage } = usePage(nowShowing);
  const displayItems = useMemo(() => {
    // 페이지당 4개씩 보여주기
    if (keywordItem) {
      setMaxPage(Math.ceil(keywordItem.length / 4));
      return keywordItem.slice((nowPage - 1) * 4, nowPage * 4);
    }

    if (categoryItems) {
      setMaxPage(Math.ceil(categoryItems.length / 4));
      return categoryItems.slice((nowPage - 1) * 4, nowPage * 4);
    }
    return [];
  }, [categoryItems, nowPage, keywordItem]);

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

  const itemLoading = useMemo(
    () => categoryItemLoading || keywordLoading || categoryLoading,
    [categoryItemLoading, keywordLoading, categoryLoading],
  );

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
