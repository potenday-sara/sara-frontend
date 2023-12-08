import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from '../../../lib/axios';
import apis from '../apis';

const getCategories = async (callback) => {
  const data = await axios.get(apis.getCategories);
  let categories;
  if (data.status === 200) {
    callback(data.data[0].id, data.data[0].name);
    categories = data.data.map(({ id, name }) => {
      return { id, value: name };
    });
  }
  return categories;
};

const getItemsByCategory = async (id, callback) => {
  console.log(id);
  const data = await axios.get(apis.getItemsByCategories(id));
  if (data.status === 200) {
    callback(Math.ceil(data.data.length / 4));
  }
  return data.data;
};

const usePage = () => {
  const [nowPage, setNowPage] = useState(1);
  const [maxPage, setMaxPage] = useState(4);

  const changeNextPage = () => {
    if (nowPage + 1 <= maxPage) setNowPage((prev) => prev + 1);
  };

  const changePrevPage = () => {
    if (nowPage - 1 >= 1) setNowPage((prev) => prev + 1);
  };

  return { nowPage, changeNextPage, changePrevPage, setMaxPage };
};

const useCoupang = () => {
  const [nowCategory, setNowCategory] = useState({});
  const { nowPage, setNextPage, setPrevPage, setMaxPage } = usePage();

  const changeNowCategory = (id, value) => {
    setNowCategory({ id, value });
  };

  const { data: categories, isLoading: categoryLoading } = useQuery({
    queryKey: ['coupangCategories'],
    queryFn: () => getCategories(changeNowCategory),
  });

  const { data: items, isLoading: itemLoading } = useQuery({
    queryKey: ['CoupangItemsByCategory', nowCategory.id],
    queryFn: () => getItemsByCategory(nowCategory.id, setMaxPage),
    enabled: !!nowCategory?.id,
  });

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
  };

  // return { Ca };
};

export default useCoupang;
