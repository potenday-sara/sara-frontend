import { useEffect, useRef, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';

const getCategories = async () => {
  const data = await axios.get(apis.getCategories);
  let categories;
  if (data.status === 200) {
    categories = data.data.map(({ id, name }) => {
      return { id, value: name };
    });
  }
  return categories;
};

const getItemsByCategory = async (id, callback) => {
  const data = await axios.get(apis.getItemsByCategories(id));
  if (data.status === 200) {
    callback(Math.ceil(data.data.length / 4));
  }
  return data.data;
};

const getItemsByKeyword = async (keyword, callback) => {
  if (!keyword) return null;
  const data = await axios.get(apis.getItemsByKeyword, { params: { keyword } });
  if (data.status === 200) {
    callback(Math.ceil(data.data.length / 4));
  }
  return data?.data;
};

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

const useCoupang = () => {
  const [nowCategory, setNowCategory] = useState({});
  const [keyword, setKeyword] = useState('');
  const { nowPage, setNowPage, setNextPage, setPrevPage, setMaxPage, maxPage } = usePage();
  const [items, setItems] = useState([]);
  const [itemLoading, setItemLoading] = useState({});

  const changeNowCategory = (id, value) => {
    setNowPage(1);
    setNowCategory({ id, value });
  };

  const queryClient = useQueryClient();

  const { data: categories, isLoading: categoryLoading } = useQuery({
    queryKey: ['coupangCategories'],
    queryFn: () => getCategories(),
    staleTime: Infinity,
  });

  const { data: categoryItem, isLoading: categoryItemLoading } = useQuery({
    queryKey: ['CoupangItemsByCategory', nowCategory.id],
    queryFn: () => getItemsByCategory(nowCategory.id, setMaxPage),
    enabled: !!nowCategory?.id,
    staleTime: Infinity,
  });

  const { data: keywordItem, isLoading: keywordLoading } = useQuery({
    queryKey: ['CoupangItemsByKeyword', keyword],
    queryFn: () => getItemsByKeyword(keyword, setMaxPage),
    staleTime: Infinity,
  });

  useEffect(() => {
    if (categories?.length) {
      const randomValue = Math.floor(Math.random() * categories.length);
      changeNowCategory(categories[randomValue].id, categories[randomValue].value);
    }
  }, [categories]);

  const isMouted = useRef(false);

  useEffect(() => {
    if (isMouted.current) {
      categories.forEach(({ id }) => {
        queryClient.prefetchQuery({
          queryKey: ['CoupangItemsByCategory', id],
          queryFn: () => getItemsByCategory(id, setMaxPage),
          staleTime: Infinity,
        });
      });
    } else {
      isMouted.current = true;
    }
  }, [categories]);

  // TODO: 구조 개선 필요
  // category - keyword 양쪽 데이터를 item에 담기 위한 처리
  useEffect(() => {
    setItems(categoryItem);
  }, [categoryItem]);

  useEffect(() => {
    setItemLoading(categoryItemLoading);
  }, [categoryItemLoading]);

  useEffect(() => {
    if (keyword) {
      setItems(keywordItem);
    } else {
      setItems(categoryItem);
    }
  }, [keywordItem]);

  useEffect(() => {
    setItemLoading(keywordLoading);
  }, [keywordLoading]);

  const updateKeyword = (newKeyword) => {
    setKeyword(newKeyword);
  };

  const showingData = (items || []).slice((nowPage - 1) * 4, nowPage * 4);

  return {
    categories,
    categoryLoading,
    nowCategory,
    changeNowCategory,
    showingData,
    itemLoading,
    nowPage,
    setNextPage,
    setPrevPage,
    maxPage,
    updateKeyword,
  };

  // return { Ca };
};

export default useCoupang;
