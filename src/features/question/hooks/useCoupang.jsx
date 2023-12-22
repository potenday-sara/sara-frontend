import { useEffect, useRef, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';

const getCategories = async (callback) => {
  const data = await axios.get(apis.getCategories);
  let categories;
  if (data.status === 200) {
    const randomValue = Math.floor(Math.random() * data.data.length);

    callback(data.data[randomValue].id, data.data[randomValue].name);
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
  const { nowPage, setNowPage, setNextPage, setPrevPage, setMaxPage, maxPage } = usePage();

  const changeNowCategory = (id, value) => {
    setNowPage(1);
    setNowCategory({ id, value });
  };

  const queryClient = useQueryClient();

  const { data: categories, isLoading: categoryLoading } = useQuery({
    queryKey: ['coupangCategories'],
    queryFn: () => getCategories(changeNowCategory),
    staleTime: Infinity,
  });

  const { data: items, isLoading: itemLoading } = useQuery({
    queryKey: ['CoupangItemsByCategory', nowCategory.id],
    queryFn: () => getItemsByCategory(nowCategory.id, setMaxPage),
    enabled: !!nowCategory?.id,
    staleTime: Infinity,
  });

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
  };

  // return { Ca };
};

export default useCoupang;
